"use client";

import { ReactNode } from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../contexts/AuthContext";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  const buttonStyles = {
    background: "linear-gradient(45deg, #6B46C1 30%, #805AD5 90%)",
    color: "#FFFFFF",
    borderRadius: "6px",
    padding: "8px 16px",
    fontWeight: 500,
    textTransform: "none",
    "&:hover": {
      background: "linear-gradient(45deg, #805AD5 30%, #6B46C1 90%)",
      boxShadow: "0 0 10px rgba(107, 70, 193, 0.5)",
    },
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundColor: "#0A0A0A",
        color: "#FFFFFF",
      }}
    >
      <AppBar
        position="static"
        className="w-full"
        sx={{
          bgcolor: "#0A0A0A",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "none",
        }}
      >
        <Toolbar className="max-w-7xl mx-auto w-full">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mr: 2,
                cursor: "pointer",
                "&:hover": { opacity: 0.8 },
              }}
              onClick={() => router.push("/")}
            >
              <img src="/gift-icon.svg" alt="Caddio" className="h-8 w-8 mr-2" />
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: 600,
                  color: "#FFFFFF",
                }}
              >
                Caddio
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            {isAuthenticated && (
              <>
                <Button component={Link} href="/dashboard" sx={buttonStyles}>
                  Dashboard
                </Button>
                <Button onClick={handleLogout} sx={buttonStyles}>
                  Logout
                </Button>
              </>
            )}
            {!isAuthenticated && (
              <Button component={Link} href="/login" sx={buttonStyles}>
                Login / register
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <main
        className="flex-grow max-w-7xl mx-auto w-full"
        style={{
          padding: "2rem",
          color: "#FFFFFF",
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
