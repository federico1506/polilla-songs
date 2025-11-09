import React from "react";
import { RECITALES } from "./constants/constants";
import "./styles/recitales.css";

const Recitales = () => {
  return (
 <section className="recitales-container">
      <h2 className="recitales-title">Próximos Recitales</h2>

      <div className="recitales-list">
        {RECITALES.map((recital) => (
          <div key={recital.id} className="recital-item">
            <div className="recital-info">
              <h3 className="recital-lugar">{recital.lugar}</h3>
              <p className="recital-ciudad">{recital.ciudad}</p>
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
          </div>
        ))}
      </div>
    </section>
  )
}

export default Recitales
