// React
import React from "react"
import { useSpring, animated } from "@react-spring/web"

// Imagen
import nombrePolilla from "../../assets/PNG POLILLA 01.png"
import logoPolilla from "../../assets/PNG POLILLA - LOGO 01.png"

// Components
import Button from "../../components/Button/Button"
import "./styles/Menu.css"
import ModalFollow from "../../components/ModalFollow/ModalFollow";

// Glitch
import { PowerGlitch } from "powerglitch";
import { Link } from "react-router-dom";

const Menu = () => {
  const [open, setOpen] = React.useState(false);
  const logoSpring = useSpring({
    from: { opacity: 0, transform: "translateY(-20px) scale(0.95)" },
    to: { opacity: 1, transform: "translateY(0px) scale(1)" },
    config: { tension: 120, friction: 20 },
    delay: 320,
  });

  const glitchLogoPolilla = {
    timing: {
      duration: 4000,
      easing: "linear",
    },
    shake: {
      amplitudeX: 0.05,
      amplitudeY: 0.05,
    },
    slice: {
      count: 2,
      velocity: 10,
      minHeight: 0.05,
      maxHeight: 0.05,
    },
  };
  const glitchNombrePolilla = {
    timing: {
      duration: 4000,
      easing: "linear",
    },
    shake: {
      amplitudeX: 0.008,
      amplitudeY: 0.008,
    },
    slice: {
      count: 2,
      velocity: 10,
      minHeight: 0.05,
      maxHeight: 0.05,
    },
  };

  React.useEffect(() => {
    PowerGlitch.glitch(".logo-polilla-img", glitchLogoPolilla);
    PowerGlitch.glitch(".nombre-polilla-img", glitchNombrePolilla);
  }, []);

  return (
    <section className="menu">
      <div className="container-polilla-img ">
        <animated.img
          src={logoPolilla}
          alt="Polilla Banda Bahiense"
          className="logo-polilla-img"
          style={logoSpring}
        />
        <animated.img
          src={nombrePolilla}
          alt="Polilla Banda Bahiense"
          className="nombre-polilla-img"
          style={logoSpring}
        />
      </div>
      <div className="menu-buttons">
        <Link to={"/recitales"}>
          <Button variant="primary">Recitales</Button>
        </Link>
        <Button variant="primary" onClick={() => setOpen(true)}>
          Seguinos
        </Button>
      </div>
      <ModalFollow open={open} onClose={() => setOpen(false)} />
    </section>
  );
};

export default Menu
