// Styles
import "./styles/recitales.css";

// Components
import Button from "../../components/Button/Button";

// Constants
import { RECITALES } from "./constants/constants";

// Spring
import { animated, useSpring } from "@react-spring/web";

const Recitales = () => {
  const fadeBlur = useSpring({
    from: { opacity: 0, filter: "blur(10px)" },
    to: { opacity: 1, filter: "blur(0px)" },
    config: { tension: 100, friction: 20 },
  });
  return (
    <animated.div style={fadeBlur} className="recitales-container">
      <h2 className="recitales-title">Próximos Recitales</h2>
      <div className="recitales-list">
        {RECITALES.map((recital) => (
          <div key={recital.id} className="recital-item">
            <div className="recital-info">
              <div className="recital-subtitles">
                <h3 className="recital-lugar">{recital.lugar}</h3>
                <p className="recital-direccion">{recital.direccion}</p>
              </div>

              <p className="recital-fecha">
                📅{" "}
                {new Date(recital.fecha).toLocaleDateString("es-AR", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              {recital.descripcion && (
                <p className="recital-descripcion">{recital.descripcion}</p>
              )}
            </div>
            {recital.tickets_button && (
              <div>
                <Button variant="secondary" className="recital-tickets">
                  Tickets
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>
    </animated.div>
  );
};

export default Recitales
