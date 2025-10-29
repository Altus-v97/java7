import React from "react";
import Saludo from "/src/exercises/ex01/Saludo.tsx";

function Composicion() {
  return (
    <div>
        <Saludo nombre="María" />
        <Saludo nombre="Luis" />
    </div>
  );
}

export default Composicion;
