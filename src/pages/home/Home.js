import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Header from "../../components/GlobalHeader";
import GroupPhoto from "../../assets/WSN Group photo - Copy.jpg";
import { Typography, CardMedia, Box, Paper } from "@mui/material";

import MiddleBackgroundStrip from "./MiddleBackgroundStrip";
import HomeOurAim from "./HomeOurAim";

export default function Home() {
  const nav = useNavigate();

  return (
    <Box>
      <Header title="Home"></Header>
      <center maxWidth="xs" style={{}}>
        <Box sx={{ maxWidth: "lg" }}>
          <Typography variant="h1" color="primary" marginBottom="20px">
            Women's Sustainability Network
          </Typography>
          <Typography variant="h2" color="secondary" marginBottom="20px">
            Together we Thrive
          </Typography>
        </Box>
        <MiddleBackgroundStrip />
        <HomeOurAim />
      </center>
    </Box>
  );
}
