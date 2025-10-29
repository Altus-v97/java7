import { MensajePersonalizado } from "./ex/ex01/mensaje.tsx";

function App() {
  return (
    <div>
      <MensajePersonalizado texto="Hola, Marou!" color="lightblue" />
      <MensajePersonalizado texto="Qué tal?!" color="tomato" />
      <MensajePersonalizado texto="Buenos dias!" color="lightgreen" />
      <MensajePersonalizado texto="Rosa" color="pink" />
    </div>
  );
}

export default App;
