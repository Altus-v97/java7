// Simulamos la obtención de tareas de una base de datos
const tareasData = ["Aprender JavaScript", "Practicar DOM", "Comer"];

// Obtenemos la referencia al contenedor principal
const contenedorTareas = document.getElementById("tareas");

// Creamos el título con el contador de tareas
const h2 = document.createElement("h2");
h2.textContent = "Mis tareas ";

// Creamos el contador de tareas como un <span>
const contador = document.createElement("span");
contador.textContent = `(${tareasData.length})`;

// Añadimos el contador al título
h2.appendChild(contador);
contenedorTareas.appendChild(h2);

// Creamos la lista de tareas
const ul = document.createElement("ul");
ul.id = "lista-tareas";

// Verificamos si hay tareas
if (tareasData.length === 0) {
  // Si no hay tareas, mostramos un mensaje
  const mensaje = document.createElement("p");
  mensaje.textContent = "No hay tareas pendientes";
  contenedorTareas.appendChild(mensaje);
} else {
  // Si hay tareas, las agregamos a la lista
  tareasData.forEach((tarea) => {
    const li = document.createElement("li");
    li.classList.add("tarea");
    li.textContent = tarea;
    ul.appendChild(li);
  });
  contenedorTareas.appendChild(ul);
}
