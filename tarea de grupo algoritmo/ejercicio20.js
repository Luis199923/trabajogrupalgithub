//20. Pedir al usuario un número y mostrar si es mayor 0 y menor o igual a 100. 

let numero = prompt("Ingrese un número:");
if (numero > 0 && numero <= 100) {
   console.log("El número es mayor a 0 y menor igual a 100");   
} 
else if (numero < -1) {
   console.log("El numero es menor a 0");  
}
else if (numero > 100) {
   console.log("El numero es mayor a 100");  
}