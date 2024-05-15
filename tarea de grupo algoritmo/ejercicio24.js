//Pedir al usuario su nota en un examen y determinar si ha aprobado o reprobado,
//considerando que la nota mínima de aprobación es 60 puntos. Si la nota es mayor a
//40 y menor a 60 se queda para recuperación caso contario pierde la materia.

//Bosquejo
//Entrada:nota=0(leer)
//Proceso: si (nota>=60)
//            escribir("Usted a aprobado.")
//         sino si (nota>40 && nota<60)
//            escribir("Se queda en recuperacion")
//         sino
//            escribir("Usted ha reprobado.")
//Salida: mostrar mensaje.

const read = require('prompt-sync')();
const write = console.log

function examen(){
    let nota=0
    nota=parseInt(read("Ingrese su nota: "))
    if (nota>=60){
        write("Usted a aprobado.")
    }else if (nota>40 && nota<60){
        write("Se queda en recuperacion")
    } else{
        write("Usted ha reprobado.")
    }
}
examen()