//Escribir un algoritmo que lea cuatro números y determine si el numero 1 es divisor
//del numero3 Y si el numero 2 es el doble del numero4
//Analisis de requerimiento
//ENT: numero1, numero2, numero3, numero4
//PRO:num1(leer),""num2(leer),""num3(leer),""num4(leer)
//SAL:mostrar el resultado del algoritmo

let num1 = parseInt("4 ")
let num2 = parseInt("20 ")
let num3 = parseInt("8")
let num4 = parseInt("10")    

if (num3 % num1 == 0)
    console.log("El número 1 es divisor del número 3.")
else
    console.log("El número 1 no es divisor del número 3.")

if (num2 == 2 * num4)
    console.log("El número 2 es el doble del número 4.")
else
    console.log("El número 2 no es el doble del número 4.")
