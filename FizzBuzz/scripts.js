/* Divisível por 3 => Fizz
Divisível por 5 => Buzz
Divisível por 3 e 5 => FizzBuzz
Não divisível por 3 ou 5 => retorna a entrada
Não é um número => 'não é um número' */
const resultado = fizzBuzz(3);
console.log(resultado);

function fizzBuzz(entrada) {
    if (typeof entrada !== 'number') {
        return 'não é um número!'
    } else if (entrada % 3 === 0 && entrada % 5 === 0) {
        return 'FizzBuzz';
    } else if (entrada % 3 === 0) {
        return 'Fizz';
    } else if (entrada % 5 === 0) {
        return 'Buzz';
    } else return entrada;
}