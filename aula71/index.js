// defineProperty -> Getter e Setters
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    
    const estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra chave
        configurable: true, // configuravel
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Somente numeros');
            }
            estoquePrivado = valor;
        }
    });
}


const p1 = new Produto('Camisaa', 20, 2);
p1.estoque = 'bfajna';
console.log(p1.estoque);
