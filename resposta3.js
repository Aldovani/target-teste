// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora,
// faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário 
//foi superior à média mensal.
const valores = [
  {
    "dia": 1,
    "valor": 22174.1664
  },
  {
    "dia": 2,
    "valor": 24537.6698
  },
  {
    "dia": 3,
    "valor": 26139.6134
  },
  {
    "dia": 4,
    "valor": 0.0
  },
  {
    "dia": 5,
    "valor": 0.0
  },
  {
    "dia": 6,
    "valor": 26742.6612
  },
  {
    "dia": 7,
    "valor": 0.0
  },
  {
    "dia": 8,
    "valor": 42889.2258
  },
  {
    "dia": 9,
    "valor": 46251.174
  },
  {
    "dia": 10,
    "valor": 11191.4722
  },
  {
    "dia": 11,
    "valor": 0.0
  },
  {
    "dia": 12,
    "valor": 0.0
  },
  {
    "dia": 13,
    "valor": 3847.4823
  },
  {
    "dia": 14,
    "valor": 373.7838
  },
  {
    "dia": 15,
    "valor": 2659.7563
  },
  {
    "dia": 16,
    "valor": 48924.2448
  },
  {
    "dia": 17,
    "valor": 18419.2614
  },
  {
    "dia": 18,
    "valor": 0.0
  },
  {
    "dia": 19,
    "valor": 0.0
  },
  {
    "dia": 20,
    "valor": 35240.1826
  },
  {
    "dia": 21,
    "valor": 43829.1667
  },
  {
    "dia": 22,
    "valor": 18235.6852
  },
  {
    "dia": 23,
    "valor": 4355.0662
  },
  {
    "dia": 24,
    "valor": 13327.1025
  },
  {
    "dia": 25,
    "valor": 0.0
  },
  {
    "dia": 26,
    "valor": 0.0
  },
  {
    "dia": 27,
    "valor": 25681.8318
  },
  {
    "dia": 28,
    "valor": 1718.1221
  },
  {
    "dia": 29,
    "valor": 13220.495
  },
  {
    "dia": 30,
    "valor": 8414.61
  }
]

let menorValorDoMes
let maiorValorDoMes
let quantidadeDeDiaSuperiorAMedia = 0


const { dias, total } = valores.reduce((anterior, atual) => {
  if (atual.valor > 0) {
    return {
      total: anterior.total + atual.valor,
      dias: anterior.dias + 1
    }
  }
  return {
    total: anterior.total,
    dias: anterior.dias
  }
}, { total: 0, dias: 0 })


const mediaMensal = Number((total / dias).toFixed(2))


for (let index = 0; index < valores.length; index++) {

  if (index == 0) {
    maiorValorDoMes = valores[index].valor
    menorValorDoMes = valores[index].valor
  }


  if (valores[index].valor > mediaMensal)
    quantidadeDeDiaSuperiorAMedia++;

  if (valores[index].valor < menorValorDoMes && valores[index] > 0)
    menorValorDoMes = valores[index].valor

  if (valores[index].valor > maiorValorDoMes)
    maiorValorDoMes = valores[index].valor



}

console.log(`
Menor valor : ${menorValorDoMes}
Maior valor : ${maiorValorDoMes}
Quantidade  de dias no mês superior à média mensal: ${quantidadeDeDiaSuperiorAMedia}

`)