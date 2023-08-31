// Filter -> Sempre vai retorna um array, com a mesma quantidade de elementos ou menos

// Retorne os numeros maiores que 10
const numeros = [1, 22, 401, 330, 184, 4, 5, 77, 100, 50, 5];

function callbackFilter (valor) {
    return valor > 10;
};
const numerosFiltrados = numeros.filter(callbackFilter);
console.log(numerosFiltrados); 

// Retorna as pessoa que tem o nome com 5 letra ou mais
// Retorna as pessoa com mais de 50 anos
// Retorna as pessoas cujo nome termina com A

 

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
const PessoasComMaisDeCinquenta = pessoas.filter(valor => valor.idade > 50);
const pessoasComOFInalA = pessoas.filter( obj => {
 return obj.nome.toLowerCase().endsWith('a');
});
console.log(pessoasComNomeGrande);
console.log(PessoasComMaisDeCinquenta);
console.log(pessoasComOFInalA);