import React from "react";

function Testimonio() {
  return(
    <div className="contenedor__testimonio">
      <img
        className="testimonio__imagen"
        src={require("../img/testimonio-emma.png")}
        alt="Foto de Emma"
      />
      <div className="testimonio__texto">
        <p className="texto__nombre">Emma Bostian en Suecia</p>
        <p className="texto__empleo">Ingenieria de Software en Spotify</p>
        <p className="texto__descripcion">"Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."</p>
      </div>
    </div>
  );
}

export { Testimonio }