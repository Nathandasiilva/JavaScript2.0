// Some todos os numeros (reduce)
// Retorno um array com os pares (Filter)
// Retorne um array com o dobro dos valores (map)
/*
const numeros = [1, 22, 401, 330, 184, 4, 5, 77, 100, 50, 5];
const total =  numeros.reduce(function(acumulador, valor) {
    acumulador += valor;
    return acumulador;
}, 0); */
//console.log(total);

// Retorne a pessoa mais velha

const pessoas = [
    {nome: 'Nathan', idade: 11},
    {nome: 'Francisco', idade: 12},
    {nome: 'José', idade: 75},
    {nome: 'Maria', idade: 65},
    {nome: 'João', idade: 53},
    {nome: 'Icaro', idade: 30},
];
const maisVelha = pessoas.reduce(function(acumulador, valor){
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);