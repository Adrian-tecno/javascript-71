/**
 * Diferencia
 * Hoisting
 * Es un proceso por el cual las funcion declaration y las variables escritas cone var, pasan a estar hasta arriba en el proceso de ejecución
 * Function Expression y arrow function no pasan por este proceso.
 */

console.log("function declaretion " + multiplyNumbers(20, 3));
console.log(addNumber(2, 5));

const addNumber = function (a, b) {
  return a + b;
};

const divideNumbers = (a, b) => a / b;

function multiplyNumbers(a, b) {
  return a * b;
}
