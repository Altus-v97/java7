let dia = prompt("Que dia es hoy?");

dia = String(dia);

if (!dia) {
  console.log("No has introducido el día");
} else if (dia === "Lunes") {
  console.log("Inicio de la semana");
} else if (dia === "Viernes") {
  console.log("Cierre de semana");
} else {
  console.log("Día intermedio");
}

