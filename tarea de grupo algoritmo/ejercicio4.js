// 260 / 12 + 54 % 3 – 85 % 7
//analisis de requerimiento
//ENT: 260 / 12 + 54 % 3 – 85 % 7
//PRO: División de 260 entre 12(leer),""Cálculo del módulo de 54 entre 3(leer),""Cálculo del módulo de 85 entre 7(leer)
//SAL: mostrar el resultado del ejercicio

function calcularResultado() {
    let resultado = (260 / 12) + (54 % 3) - (85 % 7);
    return Math.round(resultado);
}
let resultadoFinal = calcularResultado();
console.log("El resultado es: " + resultadoFinal);



