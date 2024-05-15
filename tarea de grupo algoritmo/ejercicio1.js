//1. Para a=8 y b=5, encuentra el valor de v = 2 * b + a div 2 + 4 * b mod a.

//Bosquejo
//Ent: a=8(leer) b=5(leer), v=0(calcular)
//Pro: v=2*b+(a/2)+4*(b%a)
//Sal: v

const read = require('prompt-sync')();
const write = console.log

function inte(){
    let a=8, b=5, v=0
    v=2*b+(a/2)+4*(b%a)
    write(`El resultado de la operacion es ${v}`)
}
inte()