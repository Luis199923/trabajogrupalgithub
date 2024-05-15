//(5 + 3 * 2) + 9 > 3 * 5 * 14 % 3
//Analisis de requerimiento
//ENT: resultadoIzquierda > resultadoDerecha
//PRO: resultadoIzquierda es mayor que resultadoDerecha(Leer),""resultadoIzquierda es menor que resultadoDerecha(Leer)
//SAL: mostrarsi resultado izquierda es mayor o no a resultado derecha

let resultadoIzquierda = (5 + 3 * 2) + 9;
let resultadoDerecha = 3 * 5 * 14 % 3;
if (resultadoIzquierda > resultadoDerecha) {
    console.log(resultadoIzquierda,"es mayor que", resultadoDerecha);
} else {
    console.log(resultadoIzquierda,"es menor que",resultadoDerecha);
}

