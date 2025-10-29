import React from "react";

let logueado = true;

function App() {
  return (
    <div>
      {logueado ? (
        <h2>Bienvenido al panel de Usuario.</h2>
      ) : (
        <h2>Por favor, inicia sesión.</h2>
      )}
    </div>
  );
}

export default App;

