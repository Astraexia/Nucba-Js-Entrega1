// Punto 1

function parImpar(num) {
  if (num % 2 == 0) {
    console.log("Es par");
  } else {
    console.log("Es impar");
  }
}

parImpar(9);

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

//Punto 3

function multiplo5(num) {
  if (num % 5 == 0) {
    console.log("Es multiplo de 5");
  } else {
    console.log("No es multiplo de 5");
  }
}

multiplo5(20);

//Punto 4

function imprimirHasta(num) {
  for (let i = 0; i <= num; i++) {
    console.log(i);
  }
}

imprimirHasta(4);

//Punto 5 (No entendi si lo hice bien)

function repetirPalabra(cant, palabra) {
  let i = 0
  while (i < cant) {
    console.log(palabra)
    i++
    }
  }

repetirPalabra(5, "Messi");

//Punto 6