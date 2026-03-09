"use client";

// React
import React, { useState, useCallback } from "react";
import { useSpring, animated } from "@react-spring/web";

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

// Countdown
import CountDown from "./components/CountDown/CountDown";

const TARGET_DATE = new Date("2026-03-09T18:00:00");

const isExpired = () => TARGET_DATE.getTime() <= Date.now();

function App() {
  const [showApp, setShowApp] = useState<boolean>(isExpired);

  const countdownSpring = useSpring({
    opacity: showApp ? 0 : 1,
    config: { duration: 800 },
  });

  const appSpring = useSpring({
    opacity: showApp ? 1 : 0,
    config: { duration: 900 },
    delay: showApp ? 300 : 0,
  });

  const handleFinished = useCallback(() => {
    setShowApp(true);
  }, []);

  React.useEffect(() => {
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      {!isExpired() && (
        <animated.div
          style={{
            ...countdownSpring,
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            pointerEvents: showApp ? "none" : "auto",
          }}
        >
          <CountDown
            targetDate={TARGET_DATE}
            title="Muy pronto"
            subtitle="Construyendo algo para ustedes"
            onFinished={handleFinished}
          />
        </animated.div>
      )}

      <animated.div style={appSpring}>
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
      </animated.div>
    </>
  );
}

export default App;