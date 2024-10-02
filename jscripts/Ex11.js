let numero

while (true) {
    numero = parseInt(prompt("Introduce un número entero (negativo para salir):"));
    
    if (numero < 0) {
        break
    }
    
    console.log("Número ingresado: ", numero)
}
console.log("Has introducido un número negativo. Fin del programa.")