// Dobre os número

const numeros = [1, 22, 401, 330, 184, 4, 5, 77, 100, 50, 5];
const numerosEmDobro = numeros.map(valor => valor * 2);
//console.log(numerosEmDobro);

// Para cada elemento:
// Retorno apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
    {nome: 'Nathan', idade: 11},
    {nome: 'Francisco', idade: 12},
    {nome: 'José', idade: 75},
    {nome: 'Maria', idade: 65},
    {nome: 'João', idade: 53},
    {nome: 'Icaro', idade: 30},
];
const nome = pessoas.map(obj => obj.nome);
const idades = pessoas.map( obj => ({idade: obj.idade}));

const comIds = pessoas.map(function(obj, indice) {
    const newObj = {...obj};
    newObj.id = indice;
    newObj.id = (indice + 1) * 1000;
    return newObj;
});
console.log(comIds);











