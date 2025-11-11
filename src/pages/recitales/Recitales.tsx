import React from "react";
import { RECITALES } from "./constants/constants";
import "./styles/recitales.css";

// Glitch
import { PowerGlitch } from "powerglitch";
import Button from "../../components/Button/Button";

const Recitales = () => {
    const glitchRecitalesTitle = {
    timing: {
      duration: 4000,
      easing: "linear",
    },
    shake: {
      amplitudeX: 0.02,
      amplitudeY: 0.02,
    },
    slice: {
      count: 2,
      velocity: 10,
      minHeight: 0.05,
      maxHeight: 0.05,
    },
  };

    React.useEffect(() => {
      PowerGlitch.glitch(".recitales-title", glitchRecitalesTitle);
    }, []);

  return (
    <section className="recitales-container">
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
              {
                recital.tickets_button && (
                  <div>
                      <Button variant="secondary" className="recital-tickets">Tickets</Button>
                  </div>
                )
              }
          </div>
        ))}
      </div>
    </section>
  );
}

export default Recitales
