import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Header from "../../components/GlobalHeader";
import GroupPhoto from "../../assets/WSN Group photo - Copy.jpg";
import {
  Typography,
  CardMedia,
  Box,
  Paper,
  useMediaQuery,
} from "@mui/material";

import MiddleBackgroundStrip from "./MiddleBackgroundStrip";
import HomeOurAim from "./HomeOurAim";

export default function Home() {
  const nav = useNavigate();
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  // const isMediumScreen = useMediaQuery(
  //   "(min-width: 601px) and (max-width: 1000px)"
  // );

  return (
    <Box>
      <Header title="Home"></Header>
      <center maxWidth="xs" style={{}}>
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
        <iframe
          width={isSmallScreen ? "320" : "560"}
          height={isSmallScreen ? "180" : "315"}
          src="https://www.youtube.com/embed/_rssD1F2mVc?si=l05MJQl5cAjlLomb"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </center>
    </Box>
  );
}
