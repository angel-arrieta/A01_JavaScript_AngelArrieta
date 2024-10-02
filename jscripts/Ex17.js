let contadorMayor = 0

for (let i = 0; i < 5; i++) {
    let edad = parseInt(prompt("Introduce tu edad (intenta con un número):"))

    if (isNaN(edad) || edad <= 0) {
        alert("Error: No has introducido un número válido. Por favor, intenta de nuevo.")
        i--;
    } else if (edad >= 18) {
        contadorMayor++;
    }
}
alert("Has introducido una edad mayor o igual a 18 un total de " + contadorMayor + " veces.")