"use strict";

var arr = [1, 2, 3, 4, 5, 6];
var cesta = ["banana", "maçã", "abacate", "abacaxi"];
var squareArr = arr.map(function (item) {
  return item * item;
});
console.log(squareArr);
var fruitPosition = cesta.map(function (item, index) {
  return "A/O ".concat(item, " est\xE1 na posi\xE7\xE3o ").concat(index, " do array");
});
console.log(fruitPosition);
var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum);
var filter = arr.filter(function (item) {
  return item % 2 == 0;
});
console.log(filter);
var find = arr.find(function (item) {
  return item === 4;
});
console.log(find);
