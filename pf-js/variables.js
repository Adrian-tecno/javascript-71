/** 
 * En javascript hay 3 formas de declarar variables
 *! Existe una forma que ya no se recomienda su uso:
 *! var
 * Al proceso de crear una variable y darle un valor se le llama asignacion
 * A las variables que pueden ser reasignadas (pueden cambiar en un futuro el valor que tiene) se declaran:
 *? let nombreVariable = valor;
 * 
 ** el operador = se conoce como operador de asignación 
 * Una vez creada una variable podemos usarla en otros lugares del codigo, utilixzando su nombre, las variables al ser utilizadas no van entre ""
 * 
 * Las variables que no pueden ser reasignadas (su valor no puede cambiar) se declaran:
 *? const nombreVariable = valor;

 *todo Nota: 
 Palabras reservadas: Son palabras que utiliza el lenguaje de programacion y si intentamos usarlas en otros lados pueden generar errores.
 */

let nombre = "Adrian"; //tipo string
let name = "Alejandro";
console.log(nombre);
console.log(name);

const birthYear = 1997; //tipo numero
console.log(birthYear);

/* Reasignando una variable (cambiando el valor que tiene)
  Cuando reasignamos una variable (una variable ya creada)
 ! Ya no es necesario poner let
*/

nombre = "Mario";
console.log(nombre);

/** Seccion de pruebas 
  birthYear = 1994;
  console.log(birthYear);
  
*/

/**
 * Concatenar:
 * Nos permite pega rel valor de una variable a un texto
 */

console.log(
  "Hola soy " +
    nombre +
    " y estoy en Gen con " +
    name +
    " y nacie en " +
    birthYear,
);
