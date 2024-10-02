let edad = prompt("Por favor, introduce tu edad:")
let nacionalidad = prompt("Por favor, introduce tu nacionalidad:")
edad = parseInt(edad)

if (edad >= 18 && nacionalidad.toLowerCase() === "española") {
    alert("Puedes votar");
} else {
    alert("No puedes votar");
}