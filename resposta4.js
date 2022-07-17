

const estados = [
  { sigla: 'sp', valor: 67.83643 },
  { sigla: 'rj', valor: 36.67866 },
  { sigla: 'mg', valor: 29.22988 },
  { sigla: 'es', valor: 27.16548 },
  { sigla: 'out', valor: 19.84953 },
]
const total = estados.reduce((ant, atl) => ant + atl.valor, 0)

const Porcentagem = estados.map(estado => {
  return {
    ...estado,
    porcentagem: ((estado.valor *100)/total ).toFixed(2) + "%"
  }
})
console.log(Porcentagem)
