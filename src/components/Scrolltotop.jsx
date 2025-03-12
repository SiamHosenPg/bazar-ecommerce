import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top only when navigating using React Router
    if (!window.history.state?.scrollPosition) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  useEffect(() => {
    // Store the scroll position when the user scrolls
    const handleScroll = () => {
      window.history.replaceState({ scrollPosition: window.scrollY }, "");
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
};

export default ScrollToTop;
