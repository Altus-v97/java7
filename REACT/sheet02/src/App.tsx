import { MensajePersonalizado } from "./ex/ex01/mensaje.tsx";
import { Tarjeta } from "./ex/ex02/Tarjeta.tsx";
import { Cabecera } from "./ex/ex02/Cabecera.tsx";

function App() {
  return (
    <div>
      <Tarjeta>
        <Cabecera>Título</Cabecera>
        <p style={{ textAlign: "center", color: "#555" }}>
          Esto n contenedor con borde y sombra que recibe cualquier contenido
          dentro.
        </p>
      </Tarjeta>
      <MensajePersonalizado texto="Hola, Marou!" color="lightblue" />
      <MensajePersonalizado texto="Qué tal?!" color="tomato" />
      <MensajePersonalizado texto="Buenos dias!" color="lightgreen" />
      <MensajePersonalizado texto="Rosa" color="pink" />
    </div>
  );
}

export default App;
