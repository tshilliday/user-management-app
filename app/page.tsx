import { Box, Typography, Button, Paper } from "@mui/material";
import Link from "next/link";
import Layout from "./components/Layout";

export default function Home() {
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
            maxWidth: 600,
            width: "100%",
            textAlign: "center",
            backgroundColor: "#1A1A1A",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Typography variant="h3" component="h1" gutterBottom>
            Welcome to Caddio
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            Please log in to access the dashboard
          </Typography>
          <Button
            component={Link}
            href="/login"
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
            Get Started
          </Button>
        </Paper>
      </Box>
    </Layout>
  );
}
