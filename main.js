const arr = [1, 2, 3, 4, 5, 6];
const cesta = ["banana", "maçã", "abacate", "abacaxi"];

const squareArr = arr.map((item) => item * item);
console.log(squareArr);

const fruitPosition = cesta.map(
  (item, index) => `A/O ${item} está na posição ${index} do array`
);

console.log(fruitPosition);

const sum = arr.reduce((total, next) => total + next);

console.log(sum);

const filter = arr.filter((item) => item % 2 == 0);

console.log(filter);

const find = arr.find((item) => item === 4);

console.log(find);
