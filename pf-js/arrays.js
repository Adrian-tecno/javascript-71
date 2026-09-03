/**
 * Estructura de datos array
 * Que son? y por que son importantes
 *
 * Son estructuras que que nos ayudan a agrupar y/o ordenar datos
 * Para maniular estos datos de manera mas eficiente
 * Dato no representa nada por si solo
 * Datos juntos y dandole contexto se vuelve información
 *
 *
 ** Array
 * Es una estructura de datos ordenada
 * !Importante
 * Los datos se identifican por un indice, el indice empieza a contar desde 0
 * El tamaño real se cuenta desde el 1
 *
 * !Importante pero particular de JS
 * Podemos guardar cualquier tipo de dato dentro del array, incluso combinaciones
 * Tienen tamaño dinamico
 *
 */

// Definición de un array
const arrayVacio = [];

const arrayContenido = ["Alberto", 20, true];
const months = ["Jan", "March", "April", "June"];
/** Obtención de un elemento guardado en un array
 * notación corchete
 * */

console.log(arrayContenido[1]);
console.log(arrayContenido[0]);
console.log(arrayContenido[3]);

/**
 * Ingresar datos al array
 * Metodos
 * 1. Unshift para ingresar elementos al comienzo del array
 * 2. Push para ingresar elementos al final del array
 */
console.log("Array antes");
console.log(arrayContenido);
arrayContenido.unshift("Javier");
console.log("Array despues");
console.log(arrayContenido);

console.log("Array antes");
console.log(arrayContenido);
arrayContenido.push("Daniel", false);
console.log("Array despues");
console.log(arrayContenido);

/**
 * Eliminar datos
 * 1. Shift elimina y devuelve el elemento en la posicion 0
 * 2. Pop elimina y devuelve el ultimo elemento del array
 *
 * todo: Nota:
 * Lo que va dentro de los parentesis de un método o funcion se conoce como argumento
 */

console.log("Array antes");
console.log(arrayContenido);
// arrayContenido.shift();
console.log(`Elemento eliminado ${arrayContenido.shift()}`);
console.log("Array antes");
console.log(arrayContenido);

console.log("Array antes");
console.log(arrayContenido);
// arrayContenido.shift();
console.log(`Elemento eliminado ${arrayContenido.pop()}`);
console.log("Array antes");
console.log(arrayContenido);

/**
 * Reasignar el valor de un indice
 */

arrayContenido[0] = "Liz";
arrayContenido[2] = "Josue";
console.log(`Resultado de la asignación de un elemento ${arrayContenido}`);
console.log(arrayContenido);

/**
 * Splice
 * Elimina elementos o agrega
 */

console.log("===SPLICE===");
arrayContenido.splice(1, 1);
console.log(arrayContenido);
arrayContenido.splice(1, 2);
console.log(arrayContenido);

// Agregar elementos
months.splice(3, 0, "Mar");
console.log(months);
