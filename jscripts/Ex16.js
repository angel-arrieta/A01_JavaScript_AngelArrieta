// Solicita introducir un número entero y lo convierte a un entero
let numero = parseInt(prompt("Introduce un número entero:"));

// Verifica si la conversión resulta en un valor no numérico
if (isNaN(numero)) {

    // Si el valor no es un numero, muestra error
    alert("Error: No has introducido un número válido.");
} else {
    // Si el valor es un número válido, verifica si es par o impar
    if (numero % 2 === 0) {
        // Si el resto de la división es 0, es par
        alert("El número " + numero + " es par.");
    } else {
        // Si el resto de la división no es 0, es impar
        alert("El número " + numero + " es impar.");
    }
}

/*
Prueba 1: Número par
-Entrada: 4
-Resultado esperado: El número 4 es par.
-Comportamiento: La conversión a entero es exitosa, se verifica que es par y se muestra el mensaje correspondiente.

Prueba 2: Número impar
-Entrada: 7
-Resultado esperado: El número 7 es impar.
-Comportamiento: La conversión a entero es exitosa, se verifica que es impar y se muestra el mensaje correspondiente.

Prueba 3: Entrada no numérica
-Entrada: "Hola"
-Resultado esperado: Error: No has introducido un número válido.
-Comportamiento: La conversión a entero resulta en NaN, se muestra el mensaje de error.

Prueba 4: Número negativo par
-Entrada: -2
-Resultado esperado: El número -2 es par.
-Comportamiento: La conversión a entero es exitosa, se verifica que es par y se muestra el mensaje correspondiente.

Prueba 5: Número negativo impar
-Entrada: -3
-Resultado esperado: El número -3 es impar.
-Comportamiento: La conversión a entero es exitosa, se verifica que es impar y se muestra el mensaje correspondiente.

Prueba 6: Cero
-Entrada: 0
-Resultado esperado: El número 0 es par.
-Comportamiento: La conversión a entero es exitosa, se verifica que es par (0 es considerado par) y se muestra el mensaje correspondiente.
*/