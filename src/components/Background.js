import { Box } from "@mui/material";
import BackgroundShapes from "../assets/Logo background longer.png";

export const Background = () => {
  return (
    <Box
      position="absolute"
      top={-100}
      left={0}
      zIndex={-1}
      sx={{
        // height: 150,
        width: "100%",
        overflow: "hidden",
      }}
    >
      <img
        src={BackgroundShapes}
        alt="Background"
        style={{
          height: "100%",
          width: "100%",
          objectFit: "contain",
        }}
      />
    </Box>
  );
};
