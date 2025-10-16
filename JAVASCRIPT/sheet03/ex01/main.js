const a = [3,1,2];

// Completa con comentarios:
a.sort(); // Es Mutable, el sort cambia el Array original a 1,2,3, no devuelve un nuevo array. Cambia el original directamente.

const b = a.slice(0, 2); // es Inmutable, el slice devuele una nueva copia de a en b sin modificar el original. [1,2]
const c = b.toReversed(); // es Inmutable, c es una copia de B, que devuelve los valores de B en reverso.[2,1]
const d = a.with(0, 99); //es Inmutable, es una copia de a pero con 99 al principio, [99,22,3]

console.log(a);
console.log (b);
console.log (c);
console.log (d);