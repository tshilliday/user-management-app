"use client";

import { useState } from "react";
import { Box, Typography, TextField, Button, Paper, Link } from "@mui/material";
import { useRouter } from "next/navigation";
import { useAuth } from "../contexts/AuthContext";
import Layout from "../components/Layout";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Login failed");
      }

      login(data.token);
      router.push("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    }
  };

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "calc(100vh - 200px)",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 4,
            maxWidth: 400,
            width: "100%",
            backgroundColor: "#1A1A1A",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom align="center">
            Login
          </Typography>
          {error && (
            <Typography color="error" align="center" sx={{ mb: 2 }}>
              {error}
            </Typography>
          )}
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "rgba(255, 255, 255, 0.1)",
                  },
                  "&:hover fieldset": {
                    borderColor: "rgba(255, 255, 255, 0.2)",
                  },
                },
              }}
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "rgba(255, 255, 255, 0.1)",
                  },
                  "&:hover fieldset": {
                    borderColor: "rgba(255, 255, 255, 0.2)",
                  },
                },
              }}
            />
            <Button
              type="submit"
              fullWidth
              sx={{
                background: "linear-gradient(45deg, #6B46C1 30%, #805AD5 90%)",
                color: "#FFFFFF",
                borderRadius: "6px",
                padding: "8px 16px",
                fontWeight: 500,
                textTransform: "none",
                mt: 3,
                "&:hover": {
                  background:
                    "linear-gradient(45deg, #805AD5 30%, #6B46C1 90%)",
                  boxShadow: "0 0 10px rgba(107, 70, 193, 0.5)",
                },
              }}
            >
              Login
            </Button>
          </form>
          <Typography align="center" sx={{ mt: 2 }}>
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              sx={{
                color: "#6B46C1",
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Register
            </Link>
          </Typography>
        </Paper>
      </Box>
    </Layout>
  );
}
