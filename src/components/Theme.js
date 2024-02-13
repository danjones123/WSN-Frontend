import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    // background: {
    //   default: "#F7F7F7",
    // },
    primary: { main: "#70ad47" },
    secondary: { main: "#2aa45e" },
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
    h1: {
      fontSize: 50,
      fontWeight: "bold",
    },
    h2: { fontSize: 40, fontWeight: "medium" },
    h3: { fontSize: 28, fontWeight: "medium" },
    h4: { fontSize: 30, fontWeight: "regular" },
    h5: { fontSize: 24, fontWeight: "medium" },
    body1: { fontSize: 24, fontWeight: "regular" },
    buttonSelected: {
      fontSize: 18,
      fontWeight: "medium",
      color: "white",
    },
    buttonSecondary: {
      fontSize: 18,
      fontWeight: "semibold",
      color: "primary",
    },
  },
});

export default theme;
