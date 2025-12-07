// React
import React from "react";

// React router
import { useLocation } from "react-router-dom";

// Lenis Smooth Scrolling
import { lenis } from "../../types/lenis";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    lenis.scrollTo(0, { immediate: true });
  }, [pathname]);

  return null;
}