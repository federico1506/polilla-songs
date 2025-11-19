// React
import React from 'react';
import { useGlitch } from 'react-powerglitch'

// Styles
import "./styles/recitales.css";

// Components
import Button from "../../components/Button/Button";

// Constants
import { glitchRecitalesTitle, RECITALES } from "./constants/constants";

const Recitales = () => {
const glitchTitle = useGlitch({
  ...glitchRecitalesTitle,
  playMode: "manual"
});

React.useEffect(() => {
  const timer = setInterval(() => glitchTitle.startGlitch(), 3000);
  return () => clearInterval(timer);
}, []);

  return (
    <section className="recitales-container">
      <h2 className="recitales-title" ref={glitchTitle.ref}>Próximos Recitales</h2>
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
