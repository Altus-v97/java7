console.log("Inicio"); // Operación sincronizada

setTimeout(() => console.log("setTimeout ejecutado"), 0);
// setTimeout es una macrotarea, que solo se ejecuta cuando todas las tareas sincronizadas y microtareas han terminado

Promise.resolve()
  .then(() => {
    console.log("Promesa resuelta");
    return "Otro valor";
  })
  .then((valor) => console.log("Segunda promesa:", valor));

console.log("Fin"); // Operación sincronizada

// Las microtareas se ejecutan después de terminar el código sincronizado y antes de una macrotarea

// El orden es: Sincronizado > Microtareas > Macrotareas
