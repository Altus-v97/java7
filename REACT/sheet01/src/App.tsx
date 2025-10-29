import React from "react";
import "./App.css";
import Saludo from "/src/exercises/ex01/Saludo.tsx";
import Composicion from "/src/exercises/ex02/Composicion.tsx";
import Usuario from "/src/exercises/ex03/Usuario.tsx";
import PanelLogin from "/src/exercises/ex04/PanelLogin.tsx";
import Listas from "/src/exercises/ex05/Listas.tsx";
import ListaUsuarios from "/src/exercises/ex06/ListaUsuarios.tsx";


function App() {
  return (
    <>
      <main>
        <h1>Introducción a React</h1>
        <Saludo nombre="Marou" />
        <Composicion />
        <Usuario />
        <PanelLogin />
        <Listas />
        <ListaUsuarios />
      </main>
    </>
  );
}


export default App;