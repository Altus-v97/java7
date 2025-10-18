const palabras = ['peras', 'manzana', 'peral', 'madera'];

function sorting(arr) {
  return arr.reduce((acc, palabra) => {
    const letra = palabra[0]; // Primera letra de palabra
    if (!acc[letra]) {
      acc[letra] = []; // Si no existe, crear array
    }
    acc[letra].push(palabra); // Agregar palabra al grupo
    return acc;
  }, {}); // Empezamos con un objeto vacío
}

const resultado = sorting(palabras);
console.log(resultado);
