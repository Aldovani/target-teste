// 5) Escreva um programa que inverta os caracteres de um string.
// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada
//  de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;



function reverseString(text) {
  let palavraInvertida = ""
  for (let index = text.length - 1; index >= 0; index--)
    palavraInvertida += text[index]

  return palavraInvertida
}

console.log(reverseString('Mochila'))
console.log(reverseString('Vespa'))
console.log(reverseString('Molhado'))