"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">404</h1>
      <h2 className="text-2xl mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-8">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="text-blue-600 border-2 border-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition-colors"
      >
        Go back home
      </Link>
    </div>
  );
}
