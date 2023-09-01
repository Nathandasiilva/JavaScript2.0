// defineProperty - definePropeties
function Produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra chave
        value: estoque, // valor
        writable: true, // pode altera ou não
        configurable: true //
    });

    Object.defineProperties(this, {
    nome: {
        enumerable: true, // mostra chave
        value: nome, // valor
        writable: true, // pode altera ou não
        configurable: true //
    },
    preco: {
        enumerable: true, // mostra chave
        value: preco, // valor
        writable: true, // pode altera ou não
        configurable: true //
    },
});
}

const p1 = new Produto('Camisaa', 20, 2);
console.log(p1);

for(let chave in p1) {
    console.log(chave);
}


