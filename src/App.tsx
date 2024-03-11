import * as React from "react";
import "./App.css";
import Home from "./pages/home/Home.tsx";
import Story from "./pages/ourStory/Story.tsx";
import ContactUs from "./pages/contactUs/contactUs";
import Register from "./pages/login/Register.tsx";
import Login from "./pages/login/Login.tsx";
import { Layout } from "./components/Layout.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import NotFound from "./pages/error/NotFound.js";
import theme from "./components/Theme.js";
import ScrollToTopOnPageChange from "./components/ScrollToTopOnPageChange.js";
import { AuthProvider } from "./context/AuthProvider.tsx";
import RequireAuth from "./components/RequireAuth.jsx";
import Protected from "./pages/testing/Protected.js";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <BrowserRouter>
          <AuthProvider>
            <ScrollToTopOnPageChange />
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/story" element={<Story />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route
                  element={<RequireAuth allowedRoles={["USER", "ADMIN"]} />}
                >
                  <Route path="/protected" element={<Protected />} />
                </Route>
                <Route path="*" element={<NotFound />}></Route>
              </Route>
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
