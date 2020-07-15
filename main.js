const arr = [1, 2, 3, 4, 5, 6];
const cesta = ["banana", "maça", "abacate", "abacaxi"];

const squareArr = arr.map(function (item) {
  return item * item;
});

console.log(squareArr);

const sum = arr.reduce(function (total, next) {
  return total + next;
});

console.log(sum);
