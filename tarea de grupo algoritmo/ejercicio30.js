//Pide al usuario el total de su cuenta en un restaurante y el porcentaje de descuento
//que ofrece por ser cliente frecuente. Si el total de la cuenta supera los $70, aplica el
//descuento por fidelidad, de lo contrario, no se aplica ningún descuento. Calcula y
//muestra el monto final con el descuento aplicado más el IVA del 15%

//Bosquejo
//Ent: toCuenta=0(leer), porDesc=0(leer), cuenMenDesc=0(calcular)
//Pro: porDesc=porDesc/100
//     si(toCuenta>70){
//        cuenMenDesc=toCuenta-(toCuenta*porDesc)
//        cuenMenDesc=cuenMenDesc+(cuenMenDesc*0.15)
//     sino
//        porDesc=toCuenta*0
//        cuenMenDesc=toCuenta+(toCuenta*0.15)
//Sal: Escribir Su monto de toCuenta dolares, su descunto es de porDesc y el resultado final mas le IVA es de cuenMenDesc.

const read = require('prompt-sync')();
const write = console.log

function cuenta(){
    let toCuenta=0, porDesc=0, cuenMenDesc=0
    toCuenta=parseInt(read("Ingrese el total de su cuenta: "))
    porDesc=parseInt(read("Ingrese el posible descuento: "))
    porDesc=porDesc/100
    if(toCuenta>70){
        cuenMenDesc=toCuenta-(toCuenta*porDesc)
        cuenMenDesc=cuenMenDesc+(cuenMenDesc*0.15)
    }else{
        porDesc=toCuenta*0
        cuenMenDesc=toCuenta+(toCuenta*0.15)
    }
    write(`Su monto de ${toCuenta} dolares, su descunto es de ${porDesc} y el resultado final mas le IVA es de ${cuenMenDesc}`)
}
cuenta()