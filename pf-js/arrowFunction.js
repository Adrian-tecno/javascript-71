/**
 * Funciones flecha (arrow function)
 * ! Importante
 * Return implicito
 * Quiere decir que si tu función se puede excribir en una sola linea sin necesidad de llaves, no es necesario poner la palabra return. La expresion a la que apunte la flecha sera retornada
 *
 * Expresiones lambda
 */

const addTwoNumbers = (a, b) => a + b;
let result = addTwoNumbers(45, 5);
console.log(`El resultado de sumar 45 + 5 es ${result}`);

const evenOrOdd = (limit) => {
  let total = 0;
  for (let i = 1; i <= limit; i++);
  {
    if (i % 2 == 0) {
      console.log("Es par");
    } else {
      console.log("Es impar");
    }
    total += i;
  }
  return total;
};

console.log(evenOrOdd(100));
