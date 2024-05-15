//19. Solicitar al usuario un número y mostrar si es divisible por 2 o impar.

//Bosquejo
//Ent: num=0(leer)
//pro: si(num%2===0)
//        Escribir(`El numero es divisible para 2.`)
//     sino
//        Escribir(`El numero es impar.`)
//Sal: Mostrar mensaje.

const read = require('prompt-sync')();
const write = console.log

function divOImpar(){
    let num=0
    num=parseInt(read("Ingrese un numero: "))
    if(num%2===0){
        write(`El numero ${num} es divisible para 2.`)
    }else{
        write(`El numero ${num} es impar.`)
    }
}
divOImpar()