//13. Pedir al usuario un número y mostrar si es par o impar. 

//Bosquejo
//Ent: nom=0(leer)
//Pro: si(nom%2===0)
//        escribir(`El numero ${nom} es par.`)
//     sino
//        escribir(`El numero ${nom} es impar.`)
//Sal: mostrar salida.

const read = require('prompt-sync')();
const write = console.log

function parOImp(){
    let nom=0
    nom=parseInt(read("ingrese un numero: "))
    if(nom%2===0){
        write(`El numero ${nom} es par.`)
    }else{
        write(`El numero ${nom} es impar.`)
    }
}
parOImp()