//Pedir al usuario el monto total de una factura y el año de la compra. Luego, calcular y mostrar el monto total a pagar
//incluyendo el IVA. Si el año de la compra es menor al 2024 el porcentaje del IVA es del 12% caso contrario aplicar el IVA del 15%
//Analisis de requerimiento
//ENT:monto, año
//PRO: monto total(leer),""año de compra(leer)
//SAL: mostrar el monto total a pagar incluyendo el iva

let montoTotal=parseFloat("100")
let añoCompra=parseFloat("2024")
let iva
if (añoCompra < 2024) {
    iva = 0.12
} else {
    iva = 0.15
}
let montoConIva =Math.round (montoTotal* (1 + iva ))
console.log("el monto total a pagar incluyendo el iva " + montoConIva)
