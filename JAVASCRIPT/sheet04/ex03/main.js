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

// EX02
const formulario = document.getElementById("form-tarea");
const listaTareas = document.getElementById("lista-tareas");
const contadorTareas = document.querySelector("h2 span");
const mensajeError = document.getElementById("mensaje-error");

let tareas = ["aprender Javascript", "practicar DOM"];

function actualizarLista() {
  listaTareas.innerHTML = "";

  tareas.forEach((tarea) => {
    const li = document.createElement("li");
    li.classList.add("tarea");
    li.textContent = tarea;
    listaTareas.appendChild(li);

    const btnCompletar = document.createElement("button");
    btnCompletar.textContent = "Completar";
    btnCompletar.classList.add("completar");

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.classList.add("eliminar");

    li.appendChild(btnCompletar);
    li.appendChild(btnEliminar);

    listaTareas.appendChild(li);
  });

  contadorTareas.textContent = `${tareas.length}`;
}

actualizarLista();

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  const tareaDescripcion = formulario.descripcion.value.trim();

  if (tareaDescripcion === "") {
    mensajeError.style.display = "block";
  } else {
    mensajeError.style.display = "none";
    tareas.push(tareaDescripcion);
    actualizarLista();
    formulario.descripcion.value = "";
  }
});

listaTareas.addEventListener("click", function (event) {
  if (event.target.classList.contains("completar")) {
    const li = event.target.parentElement;
    li.classList.add("hecha");
  }
  if (event.target.classList.contains("eliminar")) {
    const li = event.target.parentElement; //
    const index = Array.from(listaTareas.children).indexOf(li);
    tareas.splice(index, 1);
    actualizarLista();
  }
});
