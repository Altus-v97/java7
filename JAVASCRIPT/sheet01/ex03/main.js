"5" + 2 // Como "5" es un string, JavaScript convierte el número 2 en string también. El resultado es "52" (concatenación de cadenas).
"5" - 2 // Como el operador - solo funciona con números, JavaScript convierte "5" en el número 5. El resultado es 3.
true + true // En operaciones matemáticas, los booleanos se tratan como números: false vale 0 y true vale 1. Entonces 1 + 1 = 2.
false == 0 // Con == (igualdad débil), JavaScript convierte los valores al mismo tipo antes de compararlos. En este caso, false se convierte en 0, y 0 == 0 da true.
10 === "10" // Con === (igualdad estricta), los valores y los tipos deben ser exactamente iguales. Aquí, 10 es un número y "10" es un string, por eso el resultado es false.
