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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1
        style={{
          fontSize: "4rem",
          fontWeight: "bold",
          margin: 0,
          color: "#1976d2",
        }}
      >
        404
      </h1>
      <h2
        style={{
          fontSize: "2rem",
          margin: "1rem 0",
          color: "#333",
        }}
      >
        Page Not Found
      </h2>
      <p
        style={{
          fontSize: "1.2rem",
          color: "#666",
          marginBottom: "2rem",
        }}
      >
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        style={{
          color: "#1976d2",
          textDecoration: "none",
          fontSize: "1.1rem",
          padding: "0.5rem 1rem",
          border: "2px solid #1976d2",
          borderRadius: "4px",
        }}
      >
        Go back home
      </Link>
    </div>
  );
}
