let contraseña

do {
    contraseña = prompt("Introduce la contraseña:");

    if (contraseña === "1234") {
        alert("¡Contraseña correcta! Acceso concedido.");
    } else {
        alert("Contraseña incorrecta. Inténtalo de nuevo.");
    }

} while (contraseña !== "1234")