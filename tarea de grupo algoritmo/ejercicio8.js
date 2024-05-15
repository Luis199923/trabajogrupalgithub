//8. Pedir al usuario un número y mostrar si es negativo menor que -20, sino mostrar si es positivo par o impar múltiplo de 7.

let numero = prompt("Ingrese un número:");

if (numero < -20) {
    console.log("El número es menor a -20");
} else if (numero > 0) {
    if (numero % 2 === 0) {
        console.log("El número es positivo y par");
    } else {
        console.log("El número es positivo e impar");
    }
    if (numero % 7 === 0) {
        console.log("El número es múltiplo de 7");
    }
} else {
    console.log("El número no cumple ninguna condición especificada.");
}
