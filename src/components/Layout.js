import { Background } from "./Background";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Outlet />
      {/* <Background /> */}
      <Footer />
    </>
  );
};
