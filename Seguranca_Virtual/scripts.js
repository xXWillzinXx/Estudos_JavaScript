function verificarEntrada() {
    nome = document.getElementById("nome").value;
    convite = document.getElementById("convite").value;

    convidadosCristian = ['Amanda', 'Alessandra', 'Ana', 'Maria', 'Willian', 'Rafael'];
    convidadosRoberta = ['Roberta', 'Paulo', 'Flavia', 'Saulo'];

    if (convite === 'Cristian') {
        if (convidadosCristian.includes(nome)) {
            document.getElementById('permissaoDeEntrada').innerText = 'Pode Entrar!'
        } else {
            document.getElementById('permissaoDeEntrada').innerText = 'Você não pode entrar!'
        }
    } else if (convite === 'Roberta') {
        if (convidadosRoberta.includes(nome)) {
            document.getElementById('permissaoDeEntrada').innerText = 'Pode Entrar!'
        } else {
            document.getElementById('permissaoDeEntrada').innerText = 'Você não pode entrar!'
        }
    } else {
        document.getElementById('permissaoDeEntrada').innerText = 'Você não pode entrar!'
    }
}