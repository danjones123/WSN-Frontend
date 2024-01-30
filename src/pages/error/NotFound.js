import React from "react";
import Header from "../../components/GlobalHeader";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

export default function NotFound() {
  return (
    <Box>
      <Header title="404 Page Not Found"></Header>
      <center>
        <Typography variant="h3">Page Not Found!</Typography>

        <Typography variant="h6">
          Return to the <Link to="/">Homepage</Link>
        </Typography>
      </center>
    </Box>
  );
}
