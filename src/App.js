import logo from "./logo.svg";
import "./App.css";
// import "./Main.js";
import Blog from "./pages/blog/Blog.js";
import Home from "./pages/home/Home.js";
import Story from "./pages/ourStory/Story.js";
import Resources from "./pages/resources/Resources.js";
import Events from "./pages/wsnEvents/Events.js";
import ContactUs from "./pages/contactUs/contactUs.js";
import Chats from "./pages/chats/Chats.js";
import Conferences from "./pages/conferences/Conferences.js";
import Workshops from "./pages/workshops/Workshops.js";
import Training from "./pages/training/Training.js";
import { Layout } from "./components/Layout.js";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { deepOrange } from "@mui/material/colors";
import testPage from "./pages/testing/testpage.js";
import NotFound from "./pages/error/NotFound.js";

function App() {
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
      h1: { fontSize: 50, fontWeight: "bold" },
      h2: { fontSize: 40, fontWeight: "medium" },
      h3: { fontSize: 28, fontWeight: "medium" },
      h4: { fontSize: 30, fontWeight: "regular" },
      h5: { fontSize: 24, fontWeight: "medium" },
      body1: { fontSize: 24, fontWeight: "regular" },
      buttonSelected: { fontSize: 18, fontWeight: "medium", color: "white" },
      buttonSecondary: {
        fontSize: 18,
        fontWeight: "semibold",
        color: "primary",
      },
      // h6: { fontSize: "100px" },
      // body1: { fontSize: "100px", fontWeight: 300 },
      // newStyle: { fontSize: "18px", fontWeight: 450, lineHeight: "33px" },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/story" element={<Story />} />
              {/* <Route path="/resources" element={<Resources />} />
            <Route path="/events" element={<Events />} /> */}
              {/* <Route path="/blog" element={<Blog />} /> */}
              {/* <Route path="/chats" element={<Chats />} />
            <Route path="/conferences" element={<Conferences />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/training" element={<Training />} /> */}
              <Route path="/contact" element={<ContactUs />} />
              {/* <Route path="/testing" element={<testPage />} /> */}
              <Route path="*" element={<NotFound />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
