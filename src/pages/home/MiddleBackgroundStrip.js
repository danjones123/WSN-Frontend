import { Typography, Box } from "@mui/material";
import backgroundGradient from "../../assets/Background gradient strip.png";

export default function MiddleBackgroundStrip() {
  console.log(backgroundGradient);
  return (
    <Box
      // height="100px"
      // width="100px"
      sx={{
        backgroundImage:
          "linear-gradient(to right, rgba(112, 173, 71, 0.5), rgba(42, 164, 94, 0.5))", // Gradient with 0.5 opacity
        width: "100%",
        height: "300px",
        position: "relative", // Ensure proper stacking of elements
        overflow: "hidden", // Clip text overflow if needed
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
          opacity: 1, // Full opacity for text
          padding: "20px", // Adjust padding as needed
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
          contribution in every aspect that women bring to the table, in
          creating and sustaining families, developing and serving businesses,
          and influencing society.
        </Typography>
      </Box>
    </Box>
  );
}
