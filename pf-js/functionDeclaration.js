// Declarar la función
function saludar() {
  console.log("Hola");
}

// Usar la función (invocar o llamar)
saludar();
saludar();
saludar();

// función con parametros
function saludarConNombre(name, edad) {
  console.log(
    `Hola ${name} mucho gusto de conocerte, no sabia que tenias ${edad} años`,
  );
}

// Pasando argumento a una funcion
saludarConNombre("Adrian", 29);
saludarConNombre("Linai", 32);
saludarConNombre(20, "Brenda");

/**
 *
 * Función que retorna algo
 * ! Importante
 * Cuando usamos return
 * todo: 1. Termina la ejecución de la función
 * todo: 2. EL valor retornado debe ser ocupado o nunca vamos a ver
 */
function multiplayToNumbers(a, b) {
  if (typeof a == "number" && typeof b == "number") {
    return a * b; // Finaliza ejecución
  } else {
    return "Por favor envía dos números"; // Finaliza jecución
  }
  confirm.log("You can´t see me");
}

// Aqui no voy a ver nada
multiplayToNumbers(2, 3);

// Imprimiendo el valor de retorno en consola
console.log(multiplayToNumbers(3, 5));
console.log(multiplayToNumbers(8, "Adrian"));
