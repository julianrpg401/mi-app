import React from "react";

function Testimonio(){
  return(
    <div className="contenedor__testimonio">
      <img
      className="testimonio__imagen"
      src={require("../img/testimonio-emma.png")}
      alt="Foto de Emma"/> 
    </div>
  );
}

export { Testimonio }