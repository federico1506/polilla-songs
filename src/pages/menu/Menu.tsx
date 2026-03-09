'use client'

// React
import { useSpring, animated } from "@react-spring/web"

// Components
import MenuButtons from "../../components/MenuButtons/MenuButtons"

// Imagen
import nombrePolilla from "../../assets/PNG POLILLA 02.png"
import logoPolilla from "../../assets/PNG POLILLA - LOGO 02.png"

// Wave
import Wave from "react-wavify";

const Menu = () => {
  const logoSpring = useSpring({
    from: { opacity: 0, transform: "translateY(-20px) scale(0.95)" },
    to: { opacity: 1, transform: "translateY(0px) scale(1)" },
    config: { tension: 120, friction: 20 },
    delay: 320,
  });

  return (
    <section className="menu">
      <Wave
        fill="#a18aff"
        paused={false}
        options={{
          height: 20,
          amplitude: 60,
          speed: 0.15,
          points: 4,
        }}
        className="menu-wave"
      />

      <div className="container-polilla-img">
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

      <MenuButtons />

    </section>
  );
};

export default Menu;
