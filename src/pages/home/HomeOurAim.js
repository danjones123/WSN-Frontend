import { Typography, CardMedia, Box, Paper } from "@mui/material";
import BackgroundShapes from "../../assets/BackgroundShapesTEST.png";

export default function HomeOurAim() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${BackgroundShapes})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        // opacity: "70%",
        marginTop: "1%",
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
        <Typography variant="h5" marginBottom="20px">
          Our Aim
        </Typography>
        <Typography variant="body1">
          Our vision is to empower women to make life better in their own way.
          <br />
          Each woman has her own unique and individual gift that is expressed
          through her work, her home, her family and into her ecosystem.
          <br />
          The focus of WSN is to bring women together to join our network by
          encouraging, supporting and creating opportunities for women and young
          girls.
          <br />
          Through our regular events we want to open up new idea, provide new
          skills and consider how to serve the world we live in.
        </Typography>
        <br />
      </Box>
    </Box>
  );
}
