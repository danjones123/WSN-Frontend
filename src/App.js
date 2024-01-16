import logo from "./logo.svg";
import "./App.css";
// import "./Main.js";
import Blog from "./pages/blog/Blog.js";
import Home from "./pages/home/Home.js";
import Story from "./pages/ourStory/Story.js";
import Resources from "./pages/resources/Resources.js";
import Events from "./pages/wsnEvents/Events.js";
import ContactUs from "./pages/contactUs/contactUs.js";
import { Layout } from "./components/Layout.js";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/events" element={<Events />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
