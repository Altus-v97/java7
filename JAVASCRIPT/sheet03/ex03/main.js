const data = [1, [2, 3], [[4], 5]];

function flatAll(arr) {
  let result = arr;
  
  while (result.some(Array.isArray)) {
    result = result.reduce(
      (acc, val) => acc.concat(val), 
      []
    );
  }

  return result;
}

console.log(flatAll(data)); // [1, 2, 3, 4, 5]
