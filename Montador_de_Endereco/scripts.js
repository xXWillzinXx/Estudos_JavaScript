//criar objeto para criar endereço
//ele deve conter rua, cidade, CEP e uma função para exibir o endereço

function Endereco(rua, cidade, cep) {
    this.rua = rua,
        this.cidade = cidade,
        this.cep = cep
}

function mostrarEndereco(Endereco) {
    for (let chave in Endereco) {
        console.log(chave, ': ', Endereco[chave]);
    }
}

let endereco1 = new Endereco('Av das Industrias', 'Curitiba', 81310060);
let endereco2 = new Endereco('João Bettega', 'Curitiba', 81420040);

mostrarEndereco(endereco2);