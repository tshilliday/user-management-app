"use client";

import { useEffect } from "react";

export default function GlobalError({
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
    <html>
      <body>
        <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-4">
            Something went wrong!
          </h1>
          <button
            onClick={() => reset()}
            className="text-red-600 border-2 border-red-600 px-4 py-2 rounded hover:bg-red-600 hover:text-white transition-colors"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
