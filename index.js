// Punto 1

function parImpar(num) {
  if (num % 2 == 0) {
    console.log("Es par");
  } else {
    console.log("Es impar");
  }
}

parImpar(9);

console.log("Fin punto 1")

// Punto 2

function mayorNumero(num1, num2) {
  if (num1 === num2) {
    console.log("Son iguales");
  } else if (num1 > num2) {
    console.log(num1 + " Es mayor");
  } else {
    console.log(num2 + " Es mayor");
  }
}

mayorNumero(3, 7);

console.log("Fin punto 2")

//Punto 3

function multiplo5(num) {
  if (num % 5 == 0) {
    console.log("Es multiplo de 5");
  } else {
    console.log("No es multiplo de 5");
  }
}

multiplo5(20);

console.log("Fin punto 3")

//Punto 4

function imprimirHasta(num) {
  for (let i = 0; i <= num; i++) {
    console.log(i);
  }
}

imprimirHasta(4);

console.log("Fin punto 4")

//Punto 5 (No entendi si lo hice bien, intente hacerlo con un for como el punto anterior pero no sabia si estaba bien asi.)

function repetirPalabra(cant, palabra) {
  console.log(palabra.repeat(cant));
}

repetirPalabra(5, "Messi ");

console.log("Fin punto 5")

//Punto 6

function imprimirValores(array) {
  for (const valor of array) {
    console.log(valor)
  }
  }

imprimirValores(array = [10, 5, 2, 15, 9]);

console.log("Fin punto 6")

//Punto 7

function arraySin5(array) {
  for (let i = 0; i < array.length; i++) {
    if (i != 4) {
      console.log(array [i])
    }
   }
  }

arraySin5(array = [2, 4, 6, 7, 9, 3, 12, 14, 27, 81])

console.log("Fin punto 7")

//Punto 8

function multiplicarArray(array, multiplicador) {
  for (let i = 0; i < array.length; i++) {
    console.log(array [i] * multiplicador);
  }
}

multiplicarArray(array = [2, 224, 4, 10, 8], 42)

console.log("Fin punto 8")