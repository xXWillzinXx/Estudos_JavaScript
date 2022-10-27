// Escreva uma função que usa 2 números e retorna o maior entre eles

function indicarMaior(valor1, valor2) {
    if (valor1 === valor2) {
        console.log('Os valores são iguais: ', valor1);
    }
    else if (valor1 > valor2) {
        console.log('O primeiro valor é o maior: ', valor1);
    } else {
        console.log('O segundo valor é o maior: ', valor2);
    }
}

indicarMaior(1, 13);