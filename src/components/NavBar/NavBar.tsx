// Styles
import "./styles/navbar.css";

// Router
import { Link } from "react-router-dom";

// Icons
import { Music, Image, Info, CalendarDays } from "lucide-react";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/recitales" className="bubble" title="Recitales">
        <CalendarDays size={22} />
      </Link>

      <Link to="/canciones" className="bubble" title="Canciones">
        <Music size={22} />
      </Link>

      <Link to="/fotos" className="bubble" title="Fotos">
        <Image size={22} />
      </Link>

      <Link to="/informacion" className="bubble" title="Información">
        <Info size={22} />
      </Link>
    </div>
  );
};

export default NavBar;
