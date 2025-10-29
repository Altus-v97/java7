import React from "react";

const usuarios = [
  { id: 1, nombre: "Maria", edad: 25 },
  { id: 2, nombre: "Juan", edad: 55 },
  { id: 3, nombre: "Andrea", edad: "" },
];

function Userdata({ usuario }) {
  const { nombre, edad } = usuario;

  return (
    <li> 
      {edad ? (
        <h4>
          Nombre: {nombre}, Edad: {edad}
        </h4>
      ) : (
        <h4>Nombre: {nombre}, Edad: Edad no disponible</h4>
      )}
    </li>
  );
}


function App() {
  return (
    <div>
      <ul>
        {usuarios.map((usuario) => (
          <Userdata key={usuario.id} usuario={usuario} />
        ))}
      </ul>
    </div>
  );
}

export default App;
