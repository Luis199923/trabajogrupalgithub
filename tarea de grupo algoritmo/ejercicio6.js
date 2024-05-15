//Escribir un algoritmo que lea cuatro números y determine si el numero 1 es la mitad
//del número 2; Y si el numero 3 es divisor del numero 4.

//Bosquejo
//Ent: num=[](leer)
//Pro: si(num[0]*2===num[1] && num[2]%num[3]===0){
//        Escribir(`El numero ${num[0]} es la mitad de ${num[1]} y el numereo ${num[2]} es divisible para ${num[3]}`)
//     sino
//        Escribir(`No cumple con lo solicitado.`)
//Sal: Mostrar mensaje.

const read = require('prompt-sync')();
const write = console.log

function numeros(){
    let num=[]
    num.push(parseInt(read("Ingrese un numero: ")))
    num.push(parseInt(read("Ingrese otro numero: ")))
    num.push(parseInt(read("Ingrese otro numero: ")))
    num.push(parseInt(read("Ingrese un ultimo numero: ")))
    if (num[0]*2===num[1] && num[2]%num[3]===0){
        write(`El numero ${num[0]} es la mitad de ${num[1]} y el numereo ${num[2]} es divisible para ${num[3]}`)
    }else{
        write(`No cumple con lo solicitado.`)
    }
}
numeros()