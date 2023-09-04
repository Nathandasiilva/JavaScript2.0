// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
};

// Pessoa.prototype === pessoa1.__proto__

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
};

// Instância
const pessoa1 = new Pessoa('Natha', 'da Silva'); // <- Pessoa = Função construtora
const pessoa2 = new Pessoa('Icaro', 'Silva'); // <- Pessoa = Função construtora
const data = new Date(); // <-- Date = Função construtora

console.log(pessoa1);
console.log(pessoa2);