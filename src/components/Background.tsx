import * as React from "react";
import { Box } from "@mui/material";
import BackgroundShapes from "../assets/BackgroundShapesHomepage.png";

export const Background = () => {
  return (
    <Box
      position="absolute"
      top={-100}
      left={0}
      zIndex={-1}
      sx={{
        width: "100%",
        height: "100%",
        backgroundImage: `url(${BackgroundShapes})`, // Use backgroundImage instead of img element
        backgroundRepeat: "repeat", // Repeat the background image to fill the whole screen
        backgroundSize: "cover", // Ensure background image covers the entire box
      }}
    />
  );
};
