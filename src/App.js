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
import { deepOrange } from "@mui/material/colors";

function App() {
  const theme = createTheme({
    palette: {
      primary: { main: "#21658a" },
      secondary: { main: "#278fb3" },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/story" element={<Story />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/events" element={<Events />} />
            {/* <Route path="/blog" element={<Blog />} /> */}
            <Route path="/chats" element={<Chats />} />
            <Route path="/conferences" element={<Conferences />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/training" element={<Training />} />
            <Route path="/contact" element={<ContactUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
