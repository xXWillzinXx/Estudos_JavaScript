//Mostrar numeros primos de uma sequencia

exibirNumerosPrimos(15);

function exibirNumerosPrimos(limite) {
    for (let numero = 2; numero <= limite; numero++) {
        if (verificarPrimos(numero)) console.log(numero);
    }
}

function verificarPrimos(numero) {
    for (let divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor === 0) {
            return false;
        }
    }
    return true
}