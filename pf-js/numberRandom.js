/**
1. Crear una funcion
2. No tiene parametros
3. Tampoco tiene return
4. Para que el usuario adivine el numero secreto
4.  Bucles y condicionales
5. el usuario tiene 3 intentos
6. Si el usuario ingresa el numero incorrecto darle una pista
el numero es secreto es mayor o el numero secreto es menor
prompt
 * 
 */

// Función para generar un número entero aleatorio entre min y max (ambos incluidos)
function obtenerNumeroEntero(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function adivinarNumeroSecreto() {
  // Generamos un entero entre 1 y 100 usando la lógica adaptada
  const numeroSecreto = obtenerNumeroEntero(1, 100);
  const maxIntentos = 6;
  let adivinado = false;

  for (let intento = 1; intento <= maxIntentos; intento++) {
    const entrada = prompt(
      `Intento ${intento} de ${maxIntentos}: Ingrese un número entero (1-100):`,
    );

    if (entrada === null) {
      alert("Juego cancelado.");
      break;
    }

    const numeroUsuario = Number(entrada);

    if (isNaN(numeroUsuario) || entrada.trim() === "") {
      alert("Por favor, ingrese un número válido.");
      intento--; // No consume el intento si la entrada no es un número
      continue;
    }

    if (numeroUsuario === numeroSecreto) {
      alert(`¡Felicidades! Adivinaste el número secreto (${numeroSecreto}).`);
      adivinado = true;
      break;
    } else if (numeroUsuario < numeroSecreto) {
      alert("El número secreto es MAYOR.");
    } else {
      alert("El número secreto es MENOR.");
    }
  }

  if (!adivinado) {
    alert(
      `Agotaste tus ${maxIntentos} intentos. El número secreto era: ${numeroSecreto}`,
    );
  }
}

adivinarNumeroSecreto();
