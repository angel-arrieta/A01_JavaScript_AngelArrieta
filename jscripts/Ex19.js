let numero = parseInt(prompt("Introduce un número entero para calcular su factorial:"))
let factorial = 1

if (isNaN(numero) || numero < 0) {
    alert("Error: Debes introducir un número entero no negativo.");
} else {
    for (let i = 1; i <= numero; i++) {
        factorial *= i
    }

    alert("El factorial de " + numero + " es: " + factorial)
}