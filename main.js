/*let suma = 10 + 5;
let producto = 20 * 2;

if (suma < 20) {
  console.log("La suma es menor a 20");
} else {
  console.log("La suma es mayor o igual a 20");
}

if (producto > 30) {
  console.log("El producto es mayor a 30");
}*/

/*console.log("El Script está funcionando correctamente");

const titulo = document.getElementById("titulo");
titulo.textContent = "¡Texto modificado!";*/

/*nombre = "Carlos";

edad = 35;

if (edad > 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

console.log(edad > 18);
console.log(nombre);*/

//let nombre = "Carlos";
//let edad = 35;
//let esMayor = edad > 18;

//if (esMayor) {
//  console.log("Eres mayor de edad");
//} else {
//  console.log("Eres menor de edad");
//}

//console.log("Nombre:", nombre);
//console.log("Edad:", edad);
//console.log("Sos mayor de edad", esMayor);

/* let nombre = "Valentin";
let edad = 24;
let ciudad = "Balcarce";
const PI = 3.1416;
let esMayorDeEdad = edad > 18;
let numero1 = 3;
let numero2 = 5;

let suma = numero1 + numero2;
let resta = numero2 - numero1;
let multiplicacion = numero1 * numero2;
let division = numero2 / numero1;

console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);

console.log("Nombre:", nombre);
console.log("Edad", edad);
console.log("Sos de la ciudad de", ciudad);

if (esMayorDeEdad) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}
*/
/*let numero = Number(prompt("Ingresá un número:"));

if (numero > 0) {
  console.log("El número es positivo");
} else if (numero < 0) {
  console.log("El número es negativo");
} else {
  console.log("El número es cero");
}*/

/*let numero = Number(prompt("Ingresá un número:"));

if (numero % 2 === 0) {
  console.log("El número es par");
} else {
  console.log("El número es impar");
}*/

/*let nota = Number(prompt("Ingrese su nota:"));

if (nota >= 7) {
  console.log("Aprobado");
} else if (nota >= 4 && nota <= 6) {
  console.log("Regular");
} else {
  console.log("Desaprobado");
}*/

/*let precio = Number(prompt("Ingresá el precio de tu producto:"));
let precioFinal = precio * 1.21;

console.log("El precio final con IVA es: $" + precioFinal.toFixed(2));*/

//Ejercicios 11-10-25

/*let nombre = "Malena";
let edad = 19;
let ciudad = "Dinant";

console.log("Hola, me llamo", nombre, "tengo", edad, "y vivo en", ciudad);*/

let precio = 2300;
let descuento = 33.33333333333;

monto_a_descontar = (precio * descuento) / 100;
precio_final = precio - monto_a_descontar;

/*console.log(`Precio final: $${precio_final.toFixed(2)}`);*/

let cantidad = Number(
  prompt(
    "Ingresá la cantidad de leches en su variante La Serenísima descremada, larga vida x 1l:"
  )
);

tres_por_dos = precio * 2;

if (precio * 3) {
  console.log(`Precio final: $${tres_por_dos.toFixed(2)}`);
} else {
  console.log(precio);
}
