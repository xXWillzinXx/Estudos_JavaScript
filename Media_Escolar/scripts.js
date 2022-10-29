//Obter média a partir de um array
//0-59: F
//60-69: D
//70-79: C
//80-89: B
//90-100: A

const array = [70, 70, 80];

console.log(mediaDoAluno(array));

/*
Código feito pela primeira vez
function mediaDoAluno(notas) {
    let qtdNotas = notas.length;
    let soma = 0;
    let media = 0;

    for (prop of notas)
        soma = soma + prop;
    media = soma / qtdNotas;

    console.log('sua média é ', Math.floor(media));

    if (media >= 0 && media < 60) {
        return 'F'
    } else if (media >= 60 && media < 70) {
        return 'D'
    } else if (media >= 70 && media < 80) {
        return 'C'
    } else if (media >= 80 && media < 90) {
        return 'B'
    } else
        return 'A'
}*/

//código simplificado
function mediaDoAluno(notas) {
    const media = calcularMedia(notas);

    if (media < 59) return 'F';
    if (media < 69) return 'D';
    if (media < 79) return 'C';
    if (media < 89) return 'B';
    return 'A';
}

function calcularMedia(array) {
    let soma = 0;
    for (let valor of array)
        soma += valor;
    return soma / (array.length);
}