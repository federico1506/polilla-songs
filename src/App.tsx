"use client";

// React
import React from "react";

// Lenis Smooth Scrolling
import { lenis } from "./types/lenis";

// Routing
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

// Pages
import Menu from "./pages/menu/Menu";
import Canciones from "./pages/canciones/Canciones";
import Fotos from "./pages/fotos/Fotos";
import Informacion from "./pages/informacion/Informacion";
import Recitales from "./pages/recitales/Recitales";

// Layout
import MainLayout from "./layouts/MainLayout";

function App() {

  // Lenis Smooth Scrolling
  React.useEffect(() => {
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Menu />} />
          <Route path="/canciones" element={<Canciones />} />
          <Route path="/fotos" element={<Fotos />} />
          <Route path="/informacion" element={<Informacion />} />
          <Route path="/recitales" element={<Recitales />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
