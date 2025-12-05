import info_imagen from "../../assets/INSTRUMENTS.jpg";
import grupo_imagen from "../../assets/BAND2.png";
import "./styles/informacion.css";

const Informacion = () => {
  return (
    <div className="informacion-container">
      <div className="informacion-header">
        <div className="informacion-title">Polilla</div>
        <div className="informacion-subtitle">Bahia Blanca</div>
      </div>

      <div className="parallax-section">
        <div
          className="parallax-image"
          style={{
            backgroundImage: `url(${grupo_imagen})`,
          }}
        ></div>
      </div>
      <div className="informacion-about-container">
        <div className="informacion-subtitle2">Sobre nosotros</div>
        <div className="informacion-about-container2">
          <div className="informacion-info">
            <p className="informacion-texto">
              Polilla nació en 2022 como una banda, pero desde el primer día
              entendió que lo suyo iba más allá de la música. Para nosotros,
              cada ensayo, cada show y cada encuentro es una excusa para crear
              momentos especiales con la gente que se cruza en nuestro camino.
              La música es el puente, pero lo verdaderamente importante es lo
              que pasa alrededor: la energía compartida, el caos lindo, la vibra
              polillera. A lo largo del tiempo hubo cambios, idas y vueltas,
              nuevas etapas y nuevas caras, pero algo nunca se movió: la esencia
              de Polilla.
            </p>
            <p className="informacion-texto">
              Hoy la banda está formada por Rodrigo Benedicti en la voz, Bruno
              Aguayo en la batería, Federico Pereyra en el piano, Baltazar Gómez
              y Marcio Madsen en guitarra, y Juan Pablo Garraza en el bajo.
              Nuestro sonido mezcla el groove del funk con guiños de nu metal y
              toda la influencia del entorno musical que nos rodea. Polilla
              busca dejar su marca siguiendo la luz, como una polilla curiosa
              que avanza hacia lo que la inspira, navegando un futuro musical
              que sigue en movimiento.
            </p>

            <p className="informacion-texto">
              La música es el puente, pero lo verdaderamente importante es lo
              que pasa alrededor: la energía compartida, el caos lindo, la vibra
              polillera. A lo largo del tiempo hubo cambios, idas y vueltas,
              nuevas etapas y nuevas caras, pero algo nunca se movió: la esencia
              de Polilla. Hoy la banda está formada por Rodrigo Benedicti en la
              voz, Bruno Aguayo en la batería, Federico Pereyra en el piano,
              Baltazar Gómez y Marcio Madsen en guitarra, y Juan Pablo Garraza
              en el bajo.
            </p>
            <p className="informacion-texto">
              Nuestro sonido mezcla el groove del funk con guiños de nu metal y
              toda la influencia del entorno musical que nos rodea. Polilla
              busca dejar su marca siguiendo la luz, como una polilla curiosa
              que avanza hacia lo que la inspira, navegando un futuro musical
              que sigue en movimiento.
            </p>
          </div>

          <div className="informacion-imagen">
            <img
              className="informacion-imagen-img"
              src={info_imagen}
              alt="Imagen de la banda Polilla"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Informacion;
