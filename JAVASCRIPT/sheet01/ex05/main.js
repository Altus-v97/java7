let edad = prompt("Por favor, ingresa tu edad:");

edad = Number(edad);

if (!edad) {
  console.log("Edad no especificada");
} else if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}
