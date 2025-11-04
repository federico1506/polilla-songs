// React
import { useSpring, animated } from "@react-spring/web"

// Imagen
import nombrePolilla from "../../assets/PNG POLILLA 01.png"
import logoPolilla from "../../assets/PNG POLILLA - LOGO 01.png"
import Button from "../Button/Button"

const Header = () => {
  // Animación del logo
  const logoSpring = useSpring({
    from: { opacity: 0, transform: "translateY(-20px) scale(0.95)" },
    to: { opacity: 1, transform: "translateY(0px) scale(1)" },
    config: { tension: 120, friction: 20 },
    delay: 320,
  })

  return (
    <header className="header">
      <div className="container-polilla-img">
        <animated.img src={logoPolilla} alt="Polilla Banda Bahiense" className="logo-polilla-img" style={logoSpring} />
        <animated.img
          src={nombrePolilla}
          alt="Polilla Banda Bahiense"
          className="nombre-polilla-img"
          style={logoSpring}
        />
        <Button variant="primary">Seguinos</Button>
      </div>
    </header>
  )
}

export default Header
