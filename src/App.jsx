import * as React from "react";
import "./App.css";
import Home from "./pages/home/Home.jsx";
import Story from "./pages/ourStory/Story.jsx";
import ContactUs from "./pages/contactUs/contactUs.jsx";
import Register from "./pages/login/Register.jsx";
import Login from "./pages/login/Login.jsx";
import { Layout } from "./components/Layout.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import NotFound from "./pages/error/NotFound.js";
import theme from "./components/Theme.js";
import ScrollToTopOnPageChange from "./components/ScrollToTopOnPageChange.js";
import { AuthProvider } from "./context/AuthProvider.jsx";
import RequireAuth from "./components/RequireAuth.jsx";
import Protected from "./pages/testing/Protected.js";
import PersistLogin from "./components/PersistLogin.jsx";

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
                <Route element={<PersistLogin />}>
                  <Route element={<RequireAuth allowedRoles={["USER"]} />}>
                    <Route path="/protected" element={<Protected />} />
                  </Route>
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
