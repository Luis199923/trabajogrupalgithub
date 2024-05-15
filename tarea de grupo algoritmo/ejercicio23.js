/*23. Solicitar al usuario el precio de un producto y el porcentaje de descuento aplicado. 
Calcular y mostrar el precio final luego de aplicar el descuento siempre cuando el precio sea mayor $100.*/

let precioproducto = prompt("Ingrese el precio del producto:");
let porcentajedescuento = prompt("Ingrese el descuento que quiere sacar:");
if (precioproducto > 100) {
    let preciofinal = precioproducto * porcentajedescuento / 100
    let preciocondescuento = precioproducto - preciofinal
    console.log("El precio con descuento es: " + preciocondescuento);
} else {
    console.log("El precio final es: " + precioproducto);
}