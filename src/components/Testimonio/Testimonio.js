import React from "react";
import "./Testimonio.css";

function Testimonio(props) {
  return(
    <div className="contenedor__testimonio">
      <img
        className="testimonio__imagen"
        src={require(`../../img/testimonio-${props.imagen}.png`)}
        alt='Foto de Emma'
      />
      <div className="testimonio__texto">
        <p className="texto__nombre">{props.nombre} en {props.pais}</p>
        <p className="texto__empleo">{props.cargo} en {props.empresa}</p>
        <p className="texto__descripcion">{props.testimonio}</p>
      </div>
    </div>
  );
}

export { Testimonio };