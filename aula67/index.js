// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobro os valores
// -> Reduzir (somar tudo)
const numeros = [1, 22, 401, 330, 184, 4, 5, 77, 100, 50, 5];
const numerosPares = numeros
  .filter(valor => valor % 2 === 0)
  .map(valor => valor * 2)
  .reduce((ac, valor) => ac + valor);
console.log(numerosPares);