// Produto -> aumento, desconto
// Camiseta - cor, Caneca - material
function Produto (nome, preco) {
    this.nome = nome;
    this.preco = preco
}
Produto.prototype.aumento = function(quantidade) {
    this.preco += quantidade;
};
Produto.prototype.desconto = function(quantidade) {
    this.preco -= quantidade;
};

//Camiseta

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

//Caneca

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
    }
    });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

Caneca.prototype.aumenmto = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
}


const produto = new Produto('Gren', 111)
const camiseta = new Camiseta('Regata', 7.5, 'preta');
const caneca = new Caneca ('Caneca', 15, 'Plastico', 5);

console.log(caneca.estoque);
console.log(caneca);
console.log(camiseta);
console.log(produto);