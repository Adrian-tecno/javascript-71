/**
 * Prompt:
 * 1. Hay que asignar su uso a una variable para luego poder usar el valor que ingreso el usuario.
 *      1-2. Usar el valor inmediatamente.
 *! Importante
 * 1. No se recomienda su uso en aplicaciones en prod
 * 2. Bloquea el código, esto quiere decir que el código que este debajo de donde escribimos el prompt no se va a ejecutar, hasta que el usuario ingrese algo.
 * 3. No se puede personalizar.
 * 4. Todo lo que ingresa mediante prompt siempre es string
 */

/**
 * 
const nombre = prompt("Ingresa tu nombre:");
const edad = prompt("Ingresa tu edad:", 15);
console.log(edad);
console.log("Hola soy " + nombre + " y tengo " + edad + " años");
alert("Hola soy " + nombre + " y tengo " + edad + " años");
 */

const serie = prompt("Ingresa tu serie favorita:");
const personaje = prompt("Ingresa tu personaje favorito de esa serie:");
console.log(
  "Hola mi serie favorita es " +
    serie +
    " porque me divierte su trama y mi personaje favorito es " +
    personaje +
    " porque me gusta como lo desarrolla",
);
alert(
  "Hola mi serie favorita es " +
    serie +
    " porque me divierte su trama y mi personaje favorito es " +
    personaje +
    " porque me gusta como lo desarrolla",
);
