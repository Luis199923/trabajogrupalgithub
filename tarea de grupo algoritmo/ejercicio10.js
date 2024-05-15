//10. El banco POO ha decidido aumentar el límite de crédito de las tarjetas de crédito de
//sus clientes, para esto considera que:
//Si su cliente tiene tarjeta tipo 1, el aumento será del $100 .
//Si tiene tipo 2 el aumento será del $200
//Si tiene tipo 3, el aumento será del $300
//Para cualquier otro tipo será del 500
//Se pide realizar un algoritmo que ayude al banco a determinar el nuevo límite de
//crédito que tendrá una persona en su tarjeta considerando que después del aumento
//se tendrá que subir 10% adicionales a todas las tarjetas

// bosquejo del banco POO
// entrada: credito(leer), tipoTarjeta(leer)
// proceso: si tipo==1 credito = credito +100
         // sino si tipo == 2 credito = credito + 200
         // sino si tipo == 3 credito = credito + 300
         // sino credito = credito + 500
         // finsi
         // credito = credito + credito*0.10
// salida: escribir credito

const read = require('prompt-sync')();
const write = console.log

function banco(){
    let credito=0, tipoTarjeta=0
    credito=parseFloat(read("Ingrese su credito: "))
    tipoTarjeta=parseInt(read("ingrese su tipo de tarjeta: "))
    if(tipoTarjeta==1){
        credito=credito+100
    }else if(tipoTarjeta==2){
        credito=credito+200
    }else if(tipoTarjeta==3){
        credito=credito+300
    }else{
        credito=credito+500
    }
    credito=credito+(credito*0.10)
    write(`Ahora posee en su credito $${credito} dolares.`)
}
banco()