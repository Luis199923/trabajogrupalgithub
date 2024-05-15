//16. Solicitar al usuario un carácter y mostrar si es una vocal o consonante. 

let caracter = prompt("Ingrese un carácter:");
if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u'|| caracter === 'A' || caracter === 'E' || caracter === 'I' || caracter === 'O' || caracter === 'U') {
    console.log("El carácter ingresado es una vocal.");
} else {
    console.log("El carácter ingresado es una consonante.");
}