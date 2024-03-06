import * as React from "react";
import "./App.css";
import Home from "./pages/home/Home.tsx";
import Story from "./pages/ourStory/Story.tsx";
import ContactUs from "./pages/contactUs/contactUs";
import Register from "./pages/login/Register.tsx";
import { Layout } from "./components/Layout.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import NotFound from "./pages/error/NotFound.js";
import theme from "./components/Theme.js";
import ScrollToTopOnPageChange from "./components/ScrollToTopOnPageChange.js";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <BrowserRouter>
          <ScrollToTopOnPageChange />
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
              <Route path="/register" element={<Register />} />
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
