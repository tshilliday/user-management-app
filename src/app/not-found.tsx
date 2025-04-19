"use client";

import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function NotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        p: 4,
      }}
    >
      <Typography variant="h1" sx={{ color: "primary.main", mb: 2 }}>
        404
      </Typography>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
        The page you are looking for does not exist.
      </Typography>
      <Button component={Link} href="/" variant="outlined" color="primary">
        Go back home
      </Button>
    </Box>
  );
}
