//Calculadora de sueldo con aumento: Pide al usuario que ingrese su salario actual y el porcentaje de aumento que recibirá.
//Calcula y muestra el nuevo salario después del aumento
//Analisis de requerimiento
//ENT:salario actual, porcentaje del aumento
//PRO: salarioActual(leer),""porcentajeAumento(leer),""aumentos = salarioActual * porcentajeAumento / 100,""nuevoSalario = salarioActual + aumentos
//SAL:mostrar el nuevo salario con el aumento que corresponde



let salarioActual = parseFloat("50");
let porcentajeAumento = parseFloat("20");

let aumentos = salarioActual * (porcentajeAumento / 100);
let nuevoSalario = salarioActual + aumentos;
console.log("Su nuevo salario con aumento es: $" + nuevoSalario);
 