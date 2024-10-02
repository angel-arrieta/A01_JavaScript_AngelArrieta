let numero = parseInt(prompt("Introduce un número entero:"))

if (isNaN(numero)) {
    alert("Error: No has introducido un número válido.")
} else {
    
    if (numero % 2 === 0) {
        alert("El número " + numero + " es par.")
    } else {
        alert("El número " + numero + " es impar.")
    }
}
