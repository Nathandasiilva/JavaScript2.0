function retornaFuncao(nome) {
    return function() {
        return nome;
    
    };
}

const funcao = retornaFuncao('Nathna');
const funcao2 = retornaFuncao('da Silva');

console.log(funcao);
console.log(funcao2);

console.log(funcao(), funcao2());