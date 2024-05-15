//27. Solicita al usuario su sueldo actual y el porcentaje de incremento salarial anual. Si el
//sueldo actual es menor que 500, aplica el incremento del 5%, de lo contrario, no
//aplica ningún incremento. Calcula y muestra el sueldo esperado con el incremento
//aplicado

//Bosquejo
//Ent: sueldo=0(leer), porcenIncre=0(leer), incremento=0(caalcular)
//Pro: si(sueldo<500)
//        incremento=sueldo+(sueldo*0.05)
//     sino
//        incremento=sueldo
//Sal: Escribir (`El sueldo esperado con el incremento aplicado es de $"sueldo" dolares.`)

const read = require('prompt-sync')();
const write = console.log

function incremento(){
    let sueldo=0, porcenIncre=0, incremento=0
    sueldo=parseFloat(read("Ingrese su sueldo actual: "))
    porcenIncre=parseFloat(read("Ingrese el porcentaje de incremento salarial anual: "))
    if(sueldo<500){
        incremento=sueldo+(sueldo*0.05)
    }else{
        incremento=sueldo
    }
    write(`El sueldo esperado con el incremento aplicado es de $${sueldo} dolares.`)
}
incremento()