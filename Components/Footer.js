import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}

      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "rgb(231, 208, 177)", p: 6 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        <Link color="inherit" href="#">
          Go To top
        </Link>{" "}
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Something here to give the footer a purpose!
      </Typography>
      <Copyright />
    </Box>
  );
}
