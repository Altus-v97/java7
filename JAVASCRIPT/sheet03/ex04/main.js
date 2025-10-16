const users = [
{ id: 1, name: 'Ana', age: 28 },
{ id: 2, name: 'Luis', age: 17 },
{ id: 3, name: 'Zoe', age: 34 },
];

function mayoresMayusculos(arr) {
    const mayores = arr.filter(users => users.age > 18);
    const result = mayores.map(users => ({...users, name: users.name.toUpperCase()}));
    return result;
}

const resultado = mayoresMayusculos(users);
console.log(resultado);
