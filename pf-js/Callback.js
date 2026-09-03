/**
 * Callbacks
 * Es una función que se pasa como argumento a otra función, para ser ejecutada en el momento que la función que recibe el callback lo decida.
 *
 * ? Funciones ciudadanos de primera clase:
 * Todas las funciones son tratadas como si fueran un valor
 */

function procesarPago(nombreCliente, callback, cuenta) {
  const saldoAPagar = callback(cuenta);
  console.log(
    `EL cliente ${nombreCliente} debe pagar ${saldoAPagar} después de impuestos`,
  );
}

/**
 * * Opciones para la función de callback
 * 1. Crear una funcion aparte y luego mandarla como argumento
 * 2. Crear una función anonima dentro de los parentesis de la función principal
 */

function addIVA(cuenta) {
  return cuenta * 1.16;
}

procesarPago("Adrian", addIVA, 2000);
// Procesar pago con función anonima, 2 ejemplos, uno con function y otro con arroe function

console.log("=== Calback con función anonima ===");
procesarPago(
  "Alejandro",
  function (cuenta) {
    return cuenta * 1.2;
  },
  2000,
);

console.log("=== Calback con arrow function ===");

procesarPago("Javier", (cuenta) => cuenta * 1.3, 2000);
