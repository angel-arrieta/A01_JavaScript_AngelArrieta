let cadena = prompt("Introduce una cadena de texto para verificar si es un palíndromo:")

function esPalindromo(cadena) {
    let cadenaLimpia = cadena.replace(/\s+/g, '').toLowerCase()
    let cadenaInvertida = cadenaLimpia.split('').reverse().join('')

    return cadenaLimpia === cadenaInvertida
}

if (esPalindromo(cadena)) {
    alert('La cadena es un palíndromo.')
} else {
    alert('La cadena no es un palíndromo.')
}
