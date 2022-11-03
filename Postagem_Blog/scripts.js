//criar um objeto de postagem de blog que vai conter as seguintes propriedades:
//
//titulo
//mensagem
//autor
//vizualizações
//comentarios(será um array com [autor, mensagem])
//e uma para indicar se está postada a postagem ou não

function Postagem(titulo, mensagem, autor, vizulizacoes, online) {
    this.titulo = titulo,
        this.mensagem = mensagem,
        this.autor = autor,
        this.vizulizacoes = vizulizacoes,
        this.online = online,
        this.comentarios = [];
}

function fazerComentario(postagem, autor, mensagem) {
    postagem.comentarios.push({ autor, mensagem });
}


const postagem1 = new Postagem('eleições', 'bla bla bla', 'joãozinho', 123444, true);

fazerComentario(postagem1, 'joãozinho', 'bla bla');
fazerComentario(postagem1, 'carlos', 'glu glu bla bla')

console.log(postagem1);