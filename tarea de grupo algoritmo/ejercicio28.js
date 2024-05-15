//Pide al usuario el precio total de una compra en una tienda en línea y el cupón de descuento a aplicar en porcentaje.
//Si el precio total de la compra supera los $10,aplica el descuento, de lo contrario, no aplica ningún descuento.
//Calcula y muestra el monto final con el descuento con el IVA del 15%
//Analisis de requerimiento
//ENT:precio total , cupon de descuento
//PRO: descuento = precioTotal * cuponDescuento / 100(leer),""precioConDescuento = precioTotal - descuento(leer),""montoFinal = precioConDescuento * 1.15(leer)
//SAL: mostrar si la compra aplico el descuento o no 2



let precioTotal = parseFloat("200");
let cuponDescuento = parseFloat("15");
let descuento = precioTotal * (cuponDescuento / 100);
let precioConDescuento = precioTotal - descuento;
let montoFinal = precioConDescuento * 1.15;
if (precioTotal > 10) {  
    console.log("El precio final con descuento y con IVA es: $" + montoFinal.toFixed(2));
} else {
    let montoFinalSinDescuento = precioTotal * 1.15;
    console.log("El precio final sin descuento y con IVA es: $" + montoFinalSinDescuento);
}
