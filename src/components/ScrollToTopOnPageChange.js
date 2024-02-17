import { useEffect } from "react";
import { useLocation } from "react-router-dom"; // If you're using React Router

function ScrollToTopOnPageChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page whenever pathname changes
  }, [pathname]);

  return null;
}

export default ScrollToTopOnPageChange;
