//29. Pide al usuario su salario actual y la cantidad de años de antigüedad. Calcule el valor
//del bono de antigüedad del empleado aplicando el 3% del salario por el número de
//años de antigüedad siempre y cuando supere los 3 años, caso contrario el bono de
//antigüedad es de cero. Se pide mostrar el salario y el bono de antigüedad.

//Bosquejo
//Ent: salario=0(leer), antigüedad=0(leer), bono=0(calcular)
//Pro: si (antigüedad>3)
//         bono=(salario*0.03)*antigüedad
//     sino
//         bono=0
//Sal: escribir(`Su salario es de "salario" dolares y su bono es de "bono" dolares.`)

const read = require('prompt-sync')();
const write = console.log

function bonos(){
    let salario=0, antigüedad=0, bono=0
    salario=parseFloat(read("Ingrese su salario actual: "))
    antigüedad=parseInt(read("Ingrese la cantidad de años de antigüedad: "))
    if (antigüedad>3){
        bono=(salario*0.03)*antigüedad
    }else{
        bono=0
    }
    write(`Su salario es de $${salario} dolares y su bono es de $${bono} dolares.`)
}
bonos()