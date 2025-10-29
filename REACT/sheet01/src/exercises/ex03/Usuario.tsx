import React from "react";

interface UsuarioData {
    nombre: string
    edad?: number
}

const usuarios = [
    {id: 1,
     nombre: "Maria",
     edad: 25,
    },
    {
        id: 2,
        nombre: "Juan",
        edad: 55,
    },
    {
        id: 3,
        nombre: "Andrea",
        edad: '',
    },

];

function Userdata({ usuario }) {
  const { nombre, edad } = usuario;

  if (edad === undefined || edad === null || edad === "") {
    return (
      <div>
        <h3>nombre: {nombre} (edad: Edad no disponible.)</h3>
      </div>
    );
  }

  else return (
    <div>
      <h3>
        nombre: {nombre} (edad: {edad})
      </h3>
    </div>
  );
}

function Usuario() {
  return (
    <div>
      {usuarios.map((usuario) => (
        <Userdata key={usuario.id} usuario={usuario} />
        ))}
    </div>
  );
}

export default Usuario;