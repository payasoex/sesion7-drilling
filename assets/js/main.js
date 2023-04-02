
function comparacionNumeros() {
    let numero1 = prompt("Ingrese el primer número");
    let numero2 = prompt("Ingrese el segundo número");

    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    
    if (numero1 < numero2) {
        alert(`${numero1} es menor que ${numero2}`);
    } else if (numero1 > numero2) {
        alert(`${numero1} es mayor que ${numero2}`);
    } else {
        alert("Ambos numeros son iguales");
    }
};

comparacionNumeros();