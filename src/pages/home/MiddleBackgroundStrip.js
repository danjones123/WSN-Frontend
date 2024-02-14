import { Typography, Box, CardMedia, Grid } from "@mui/material";
import backgroundGradient from "../../assets/Background gradient strip.png";
import GroupPhoto from "../../assets/WSN Group photo - Copy.jpg";
import ImageCarousel from "./ImageCarousel";

export default function MiddleBackgroundStrip() {
  console.log(backgroundGradient);
  return (
    <Box
      // height="100px"
      // width="100px"
      sx={{
        backgroundImage:
          "linear-gradient(to right, rgba(112, 173, 71, 0.35), rgba(42, 164, 94, 0.35))", // Gradient with 0.5 opacity
        width: "100%",
        // height: "300px",
        position: "relative", // Ensure proper stacking of elements
        overflow: "hidden", // Clip text overflow if needed
        padding: "20px",
      }}
    >
      <Box
        sx={{
          position: "flex",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
          opacity: 1, // Full opacity for text
          padding: "20px", // Adjust padding as needed
          maxWidth: "80vw",
        }}
      >
        <Typography variant="h3" marginBottom="20px">
          WSN is a company founded in the UAE by three dynamic women in the year
          2023.
        </Typography>
        <Grid container id="main-home-content-container">
          <Grid item xs={12} lg={8} id="home-text-grid">
            <Box sx={{ textAlign: "left" }}>
              <Typography variant="body1">
                The ruler of Dubai commemorated the year 2023 as “THE YEAR OF
                SUSTAINABILITY”
                <br />
                <br />
                To be aligned with the vision of the country gives us clear
                direction and perseverance.
                <br />
                <br />
                Women’s Sustainability Network at its core recognizes the value
                and contribution in every aspect that women bring to the table,
                in creating and sustaining families, developing and serving
                businesses, and influencing society.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} lg={4} id="home-image-grid">
            <ImageCarousel />
          </Grid>
        </Grid>
        {/* </Box> */}
      </Box>
    </Box>
  );
}
