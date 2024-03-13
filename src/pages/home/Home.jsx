import * as React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/GlobalHeader";
import { Typography, Box } from "@mui/material";

import MiddleBackgroundStrip from "./MiddleBackgroundStrip";
import HomeOurAim from "./HomeOurAim";

export default function Home() {
  return (
    <Box>
      <Header title="Home"></Header>
      <Link to="/protected">
        <Typography color="primary">Protected</Typography>
      </Link>
      <center style={{ maxWidth: "xs" }}>
        <Box sx={{ maxWidth: "lg" }}>
          <Typography variant="h1" color="primary" marginBottom="20px">
            Women's Sustainability Network
          </Typography>
          <Typography variant="h2" color="secondary" marginBottom="20px">
            Together We Thrive
          </Typography>
        </Box>
        <MiddleBackgroundStrip />
        <HomeOurAim />
      </center>
    </Box>
  );
}
