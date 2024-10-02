let edad = prompt("Por favor, introduce tu edad:")
edad = parseInt(edad);

if (edad >= 18) {
    if (edad >= 18 && edad <= 25) {
        alert("Eres mayor de edad y tienes entre 18 y 25 años.");
    } else {
        alert("Eres mayor de edad.");
    }
} else {
    alert("Eres menor de edad.");
}