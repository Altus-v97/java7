const a = [3,1,2];

function stableSort(arr) {
    const b = [...a].sort((x,y)  => x - y); 
    console.log(b);
    return b;
}

stableSort(a);
console.log(a);