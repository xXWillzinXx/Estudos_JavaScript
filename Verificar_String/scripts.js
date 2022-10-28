//Criar um método para ler propriedades de um objeto e exibir somente as propriedades do tipo String que estão nesse objeto

const filme = {
    titulo: 'Vingadores: ultimato',
    ano: 2019,
    atorPrincipal: 'robert Downey Jr.',
    indicacao: 12,
    diretor: 'Anthony Russo e Joe Russo',
    nota: 5
}

exibirPropriedades(filme);

function exibirPropriedades(obj) {
    for (let prop in obj) {
        if (typeof obj[prop] === 'string') {
            console.log(obj[prop]);
        }
    }
}