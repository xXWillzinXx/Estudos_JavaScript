//Factory Functions
function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
    return {
        marcaCelular, tamanhoTela, capacidadeBateria,
        ligar() {
            console.log('Fazendo ligação...');
        }
    }
}

const celular1 = criarCelular('Xiaomi', 5.5, 8000);
const celular2 = criarCelular('Samsung', 5.6, 6000);

console.log(celular1);
console.log(celular2);

function criarConta(nome, sobrenome, email, telefone) {
    return {
        nome, sobrenome, email, telefone
    }
}

const conta1 = criarConta('Willian', 'Calvario', 'willian-calvario@hotmail.com', 41998554657);

console.log(conta1);


function criarCarro(marca, modelo, ano, situacao) {
    return {
        marca, modelo, ano, situacao
    }
}

const carro1 = criarCarro('Renault', 'Sandero', 2020, 'novo');

console.log(carro1);

// ***----------------------------------------***
//Constructor Functions
function Celular(marcaCelular, tamanhoTela, capacidadeBateria) {
    this.marcaCelular = marcaCelular,
        this.tamanhoTela = tamanhoTela,
        this.capacidadeBateria = capacidadeBateria,
        this.ligar = function () {
            console.log('Fazendo ligação...');
        }
}


const celular3 = new Celular('Asus', 5.5, 5000);

console.log(celular3);

function Colaborador(nomeColaborador, nomeGestor, nomeGerente, matriculaColaborador) {
    this.nomeColaborador = nomeColaborador,
        this.nomeGestor = nomeGestor,
        this.nomeGerente = nomeGerente,
        this.matriculaColaborador = matriculaColaborador,
        this.verificarSituação = function () {
            if (matriculaColaborador >= 10000)
                console.log('Efetivo');
            else
                console.log('Estagiario');
        }
}




const colaborador1 = new Colaborador('Paulo Cabral', 'Josué Aurélio', 'Clórisvaldo Santos', 109230);


console.log(colaborador1)
console.log(colaborador1.verificarSituação());