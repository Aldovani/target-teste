// Dado a sequência de Fibonacci, onde
// se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2
// valores anteriores(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...),
// escreva um programa na linguagem que desejar onde, informado um número, 
//ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se 
//o número informado pertence ou não a sequência.
// IMPORTANTE:
// Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;


function NumeroExiteNaSequenciaDeFibonacci(num) {
  const Fibonacci = [];
  let encontrado = false
  let index = 0;
  while (!encontrado) {

    if (index == 0)
      Fibonacci[0] = 0;
    else if (index == 1)
      Fibonacci[1] = 1;

    else
      Fibonacci[index] = Fibonacci[index - 2] + Fibonacci[index - 1];


    if (Fibonacci[index] == num) {
      encontrado = true
      return 'o número informado pertence a sequência'
    }
    else if (Fibonacci[index] > num) {
      encontrado = true
      return ' não pertence a sequência'
    }
    index++;
  }
}
const numeroASerProcurado = 144;
console.log(NumeroExiteNaSequenciaDeFibonacci(numeroASerProcurado))