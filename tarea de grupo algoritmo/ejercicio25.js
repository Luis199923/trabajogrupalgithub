/*25. Solicitar al usuario el precio de venta de un vehículo nuevo y su año de fabricación. 
Si el año de fabricación está entre el 2020 y 2023, aplicar un descuento del 5% sobre el precio de venta. mostrar el precio final incluyendo el 15% del IVA. */
descuento = 5;
IVA = 15;
let preciodeventa = prompt("Ingrese el precio del vehículo:");
let añodefabricacion = prompt("Ingrese el año de fabricacion del vehículo:");
   
if (añodefabricacion < 2024 && añodefabricacion > 2019 ) {
    let descuentopreciodeventa = preciodeventa * descuento / 100;
    let preciodeventacondescuento = preciodeventa - descuentopreciodeventa;
    let IVApreciodeventa= preciodeventacondescuento * IVA / 100;
    let preciodeventaconIVA = preciodeventacondescuento + IVApreciodeventa;
    console.log("El precio del vehículo es: "+ preciodeventaconIVA);

} else {
    let IVApreciodeventa = preciodeventa * IVA / 100;
    let preciodeventaconIVA = preciodeventa + IVApreciodeventa;
    console.log("El precio del vehículo es: "+ preciodeventaconIVA);
}