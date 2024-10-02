let numero

while (true) {
    let entrada = prompt("Introduce un número:")
    numero = parseFloat(entrada)

    if (!isNaN(numero)) {
        alert("Número válido: " + numero);
        break
    } else {
        alert("Error: La entrada no es un número. Inténtalo de nuevo.")
    }
}
