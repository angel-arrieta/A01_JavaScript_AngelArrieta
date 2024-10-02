let numero = prompt("Por favor, introduce un número:");

numero = parseFloat(numero);

let resultado = (numero > 0) ? "El número es positivo" :
               (numero < 0) ? "El número es negativo" : 
               "El número es cero";

alert(resultado);
