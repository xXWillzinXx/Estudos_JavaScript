/*
Velocidade máxima de até 70
a cada 5km acima do limite você ganha 1 ponto
caso pontos maior que 12 => "carteira suspendida" 
Utilizar o MAth.Floor() para arredondar valores double
*/
verificarVelocidade(125.2323);

/*
Primeira versão:
function verificarVelocidade(velocidade) {
    velocidade = Math.floor(velocidade);
    //verifica se foi ultrapassado o limite de velocidade.
    if (velocidade > 70) {
        let pontos = 0;
        //loop para verificar os km ultrapassados e adicionar os pontos necessarios
        for (i = 70; i <= velocidade; i++) {
            //se a velocidade atual for divisivel por 5 vai adicionar um ponto
            if (i % 5 === 0) {
                pontos++;
            }
        }
        console.log('Ultrapassado o limite de velocidade: ', velocidade, 'km');
        console.log('Adicionado ', pontos, ' a sua carteira!');
        //verifica se a carteira foi suspendida
        if (pontos > 12) {
            console.log('Carteira suspendida!');
        }
    //se ele tiver dentro do limite 
    } else
        console.log('Está no limite de velocidade: ', velocidade, 'km.');
}
*/

//versão corrigida
function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70;
    const kmPorPontos = 5;

    if (velocidade <= velocidadeMaxima) {
        console.log('ok');
    } else {
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPontos));
        if (pontos >= 12)
            console.log('carteira suspensa')
        else
            console.log('pontos: ', pontos);
    }
}
