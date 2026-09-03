// Function expression
/** 
const getTriangleArea = function (base, heigth) {
  return (base * heigth) / 2;
};

let area = getTriangleArea(20, 24);
console.log(`El area de un triangulo de base 20 y altura 24 es ${area}`);
*/

/** 
var evaluarSerie = function () {
  var textoIngresado = prompt("Ingresa un número límite:");
  var limite = parseInt(textoIngresado);

  if (isNaN(limite) || limite < 1) {
    console.log("Por favor ingresa un número válido mayor a 0.");
    return;
  }

  for (var i = 1; i <= limite; i++) {
    if (i % 2 === 0) {
      console.log(i + " es un número par");
    } else {
      console.log(i + " es un número impar");
    }
  }
};

// Para ejecutar la función:
evaluarSerie(10);
*/

const evenOrOdd = function (limit) {
  for (let i = 1; i <= limit; i++) {
    if (i % 2 == 0) {
      console.log(`El numero ${i} es par`);
    } else {
      console.log(`El numeri ${i} es impar`);
    }
  }
};

evenOrOdd(10);
evenOrOddPromp();
