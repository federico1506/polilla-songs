import info_imagen from '../../assets/INFO2_IMAGEN.jpg'
import "./styles/informacion.css";

const Informacion = () => {
  return (
    <div className="informacion-container">
      <div className="informacion-header">
        <img src={info_imagen} alt="informacion-img" />
      </div>
      <div className="informacion-title">Polilla</div>
      <p className="informacion-texto">
        Somos Polilla, una banda bahiense integrada actualmente por seis
        miembros: un pianista, dos guitarristas, un baterista, un bajista y un
        cantante. Nuestro estilo se mueve entre el funk rock, con influencias de
        pop rock y nu metal. Todos compartimos la misma pasión por la música,
        tomándonos en serio lo que comenzó como un simple hobby. Más allá de ser
        una banda, somos un grupo de amigos que disfruta crear, tocar y crecer
        juntos. A lo largo del tiempo tuvimos cambios en la formación, pero
        siempre mantuvimos la misma energía y ganas de seguir haciendo música.
      </p>
    </div>
  );
};

export default Informacion
