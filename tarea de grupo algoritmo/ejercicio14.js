//Solicitar al usuario un número y mostrar si es positivo o negativo. 
//Analisis de requerimiento
//ENT: numero
//PRO:numero es positivo(leer),""numero es negativo(leer),""numero es igual a cero(leer)
//SAL:mostrar numero positivo o negativo

const read = require("prompt-sync")();
const write = console.log
let numero=parseInt("10")
if (numero > 0) {
    write(numero," es positivo")
} else if (numero < 0) {
    write(numero," es negativo")
} else {
    write(numero," es igual cero")
} {
    
}



