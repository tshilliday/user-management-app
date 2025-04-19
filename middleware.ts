import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Rate limiting
const rateLimit = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 100; // 100 requests per minute

export function middleware(request: NextRequest) {
  // Get client IP from headers
  const forwardedFor = request.headers.get('x-forwarded-for');
  const ip = forwardedFor ? forwardedFor.split(',')[0] : '127.0.0.1';

  // Rate limiting
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW;

  const requestTimestamps = rateLimit.get(ip) || [];
  const requestsInWindow = requestTimestamps.filter(
    (timestamp: number) => timestamp > windowStart
  );

  if (requestsInWindow.length >= MAX_REQUESTS) {
    return new NextResponse('Too Many Requests', { status: 429 });
  }

  requestsInWindow.push(now);
  rateLimit.set(ip, requestsInWindow);

  // Security headers
  const response = NextResponse.next();
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  return response;
}

export const config = {
  matcher: '/api/:path*',
};