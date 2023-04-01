const array = [1, 2, 3, 4, 5, 6, 6, [1, 2, 3, 4, 5, [1, 2, 3, 4, 5]]];
console.log(array.flat(3));

//flatmap, mapea los elementos de un array
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array2.flatMap(v => [v, v * 2]));