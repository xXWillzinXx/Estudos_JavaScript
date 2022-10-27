let pessoa = {
    nome: 'Willian',
    idade: 21,
    mesDeAniversario: 7,
    endereco: 'Curitiba, PR',
    salario: 1200
};

//uso do for, if e operações aritméticas
console.log('**verificação de aumento de salário**');
for (let i = 1; i <= 12; i++) {
    if (i === pessoa.mesDeAniversario) {
        console.log('mês ', i, ': você recebeu um aumento de 5%');
        let bonificacao = pessoa.salario * 0.05;
        pessoa.salario = pessoa.salario + bonificacao;
        console.log('seu salário atual é: ', pessoa.salario);
    } else {
        console.log('mês ', i, ': seu salário é: ', pessoa.salario);
    };
};