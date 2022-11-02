//Criar dois objetos e verificar se as propriedades e endereço de memória são iguais

function Endereco(rua, cidade, cep) {
    this.rua = rua,
        this.cidade = cidade,
        this.cep = cep
}

const endereco1 = new Endereco('a', 'b', 'c');
const endereco2 = new Endereco('a', 'b', 'c');

function saoIguais(endereco1, endereco2) {
    let i = 0, b = 0;
    for (let chave in endereco1) {
        if (endereco1[chave] === endereco2[chave]) {
            i++;
        }
        b++;
    }
    if (i === b) {
        return true;
    } else {
        return false;
    }
    // fiz dessa maneira para ser compativel com outros objetos, porem se fosse apenas o Endereco utilizado poderia ser simplesmente assim:
    //
    // return endereco1.rua === endereco2.rua &&
    //        endereco1.cidade === endereco2.cidade &&
    //        endereco1.cep === endereco2.cep;
}
function temEnderecoMemoriaIguais(endereco1, endereco2) {
    return endereco1 === endereco2;
}

console.log(saoIguais(endereco1, endereco2))
console.log(temEnderecoMemoriaIguais(endereco1, endereco2));