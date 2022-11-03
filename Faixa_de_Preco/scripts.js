//criar um array de objetos de faixa de preço para que ela possa ser usado em um site igual o mercado livre

const faixaPreco = [
    { tooltip: 'até R$700', minimo: 0, maximo: 700 },
    { tooltip: 'de R$700 a R$1000', minimo: 700, maximo: 1000 },
    { tooltip: 'de R$1000 ou mais', minimo: 1000, maximo: 999999 }
];

console.log(faixaPreco.find((min) => min.minimo === 0));