let numero = prompt("Introduce un número entero de varios dígitos:")
let suma = 0

if (isNaN(numero) || !numero) {
    alert("Error: No has introducido un número válido.")
} else {
    for (let i = 0; i < numero.length; i++) {
        suma += parseInt(numero[i])
    }

    alert("La suma de los dígitos del número " + numero + " es: " + suma)
}