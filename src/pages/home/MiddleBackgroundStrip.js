import { Typography, Box } from "@mui/material";
import backgroundGradient from "../../assets/Background gradient strip.png";

export default function MiddleBackgroundStrip() {
  console.log(backgroundGradient);
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundGradient})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "20px", // Adjust padding as needed
        textAlign: "center", // Center content horizontally
      }}
    >
      <Typography variant="h3" marginBottom="20px">
        WSN is a company founded in the UAE by three dynamic women in the year
        2023.
      </Typography>

      <Typography variant="body1">
        The ruler of Dubai commemorated the year 2023 as “THE YEAR OF
        SUSTAINABILITY”
        <br />
        To be aligned with the vision of the country gives us clear direction
        and perseverance.
        <br />
        Women’s Sustainability Network at its core recognizes the value and
        contribution in every aspect that women bring to the table, in creating
        and sustaining families, developing and serving businesses, and
        influencing society.
      </Typography>
    </Box>
  );
}
