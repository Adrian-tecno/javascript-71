/**
 *todo Condicionales
 * Serie de condiciones para que algo suceda
 *
 * En programacion para el manejo de estas condciones tenemos:
 *! EL bloque if else
 *? bloque if pregunta por una condición en caso de que esta condición sea verdadera ejecuta un bloque de código, en de falso no ejecuta nada
 *?else maneja la ejecución de código en caso negativo
 *
 ** Lo que se coloca dentro del if, debe ser algo que genere un valor True o False (tipo de dato boolean)
 */

/**
 *todo Convertir de texto a número
 *! Importante
 * Si se trata de convertir algo que no sea un numero como resultado obtendremos
 */

const birthYear = Number(prompt("Ingresa tu año de nacimiento:"));
let age = 2026 - birthYear;
console.log(birthYear);
console.log(age);

/**
 *todo Operadores lógicos:
 *? Sirven para hacer operaciones cuyo resultado es Verdadero o Falso
 * == Simbolo de igualdad en programación
 *
 ** Mayor que >
 * 2 > 1 == Verdadero
 * 1 > 2 == Falso
 * 0 > 0 == Falso
 *
 ** Menor que <
 * 2 < 1 == Falso
 * 1 < 2 == Verdadero
 * 2 < 2 == Falso
 *
 ** Comparador de igualdad ==
 * 2 == 2 == Verdadero
 * 3 == 1 == Falso
 *
 ** Mayor o igual que >=
 * 2 >= 2 == Verdadero
 * 2 >= 1 == Verdadero
 * 2 >= 3 == Falso
 *
 ** Menor o igual que <=
 * 4 <= 4 == Verdadero
 * 4 <= 5 == Verdadero
 * 7 <= 5 == Falso
 *
 ** Diferente de !=
 * 5 != 4 == Verdadero
 * 5 != 5 == Falso
 * 99 != 100 == Verdadero
 *
 ** Negacion (not) !
 * !Verdadero == Falso
 * !Falso == Verdadero
 * !(4 <= 4) == Falso
 */

/**
 * En los parentesis va la condición que se va evaluar
 * Dentro de las llaves va el codigo que se va a ejecutar en caso de que la condicion sea Verdadero.
 *
 *? else if
 * Nos permite evaluar  mas de una condición
 * va asociado a un if
 */

if (age >= 18) {
  alert("Bienvenido eres mayor de edad");
} else if (age >= 12 && age <= 15) {
  alert("Felicidades eres secunene");
} else if (age >= 6 && age <= 11) {
  alert("Felicidades estas en la primaria");
} else if (age >= 3 && age <= 5) {
  alert("Felicidades estas en el kinder");
} else {
  alert("Eres un bebé");
}
