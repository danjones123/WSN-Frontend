import React from "react";
import Header from "../../components/GlobalHeader";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

export default function Unauthorized() {
  return (
    <Box>
      <Header title="Unauthorized"></Header>
      <center>
        <Typography variant="h3">
          You do not have the correct priviledges to see this page
        </Typography>

        <Typography variant="h6">
          Return to the <Link to="/">Homepage</Link>
        </Typography>
      </center>
    </Box>
  );
}
