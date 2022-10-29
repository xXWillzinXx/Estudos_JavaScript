//Criar função para exibir a quantidade de * q a linha possui

exibirAsteriscos(20);

function exibirAsteriscos(linhas) {
    let asteriscos = '';
    for (let linha = 1; linha <= linhas; linha++) {
        for (colunas = 1; colunas <= linha; colunas++) {
            asteriscos += '*';
            break;
        }
        console.log(asteriscos);
    }
}