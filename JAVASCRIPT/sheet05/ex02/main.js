function wait(ms, callback) {
  setTimeout(callback, ms);
}

console.log("Iniciando operación...");

wait(2000, () => {
  console.log("Consultando base de datos...");

  wait(1000, () => {
    console.log("Procesando datos...");

    wait(500, () => {
      console.log("Operación completada");
    });
  });
});



