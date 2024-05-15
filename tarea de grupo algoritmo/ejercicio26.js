//Pide al usuario el precio de un artículo y el porcentaje de impuesto de ventas aplicado en su región.
//Si el precio del artículo supera los $200, aplica el impuesto de ventas, de lo contrario, no se aplica impuesto.
//Calcula y muestra el precio final luego de aplicar el impuesto.
//Analisis de requerimiento
//ENT: precio, impuesto
//PRO: precio es mayor que 200(leer),""impuesto dividido por 100.(leer),""calcularPrecioFinal(leer)
//SAL: mensaje del impuesto aplicado o no

function calcularPrecioFinal() {
    let precio = parseFloat(("200"));
    let impuesto = parseFloat(("0.15"));
    if (precio > 200) {
        let impuestoCalculado = precio * (impuesto / 100);
        let precioFinal = precio + impuestoCalculado;
        console.log("El precio final después de aplicar el impuesto es: $" + precioFinal);
    } else {
        console.log("No se aplica impuesto. El precio final es: $" + precio);
    }
}

calcularPrecioFinal();
