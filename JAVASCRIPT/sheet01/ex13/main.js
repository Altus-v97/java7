var globalA = 1000;
console.log(globalA);

function local(){
    let localA = 100;
    var localB = 50;
    console.log(localA);
    console.log(localB);
    console.log(globalA);

}
local()

console.log(globalA) // 1000
console.log(localA) // undefined
console.log(localB) // undefined