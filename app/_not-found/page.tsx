"use client";

import { Box, Typography, Button, Paper } from "@mui/material";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // This ensures the page is treated as a 404
    if (typeof window !== "undefined") {
      window.document.title = "404 - Page Not Found";
    }
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "calc(100vh - 200px)",
        p: 3,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          maxWidth: 600,
          width: "100%",
          textAlign: "center",
          backgroundColor: "#1A1A1A",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <Typography variant="h1" component="h1" gutterBottom>
          404
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Page Not Found
        </Typography>
        <Typography color="text.secondary" paragraph>
          The page you are looking for does not exist or has been moved.
        </Typography>
        <Button
          onClick={() => router.push("/")}
          sx={{
            background: "linear-gradient(45deg, #6B46C1 30%, #805AD5 90%)",
            color: "#FFFFFF",
            borderRadius: "6px",
            padding: "8px 16px",
            fontWeight: 500,
            textTransform: "none",
            mt: 2,
            "&:hover": {
              background: "linear-gradient(45deg, #805AD5 30%, #6B46C1 90%)",
              boxShadow: "0 0 10px rgba(107, 70, 193, 0.5)",
            },
          }}
        >
          Go Back Home
        </Button>
      </Paper>
    </Box>
  );
}
