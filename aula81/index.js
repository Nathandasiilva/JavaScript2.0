class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falar() {
        console.log(`${this.nome} esta falnado`);
        }
}

function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function(){
    console.log(`${this.nome} esta falnado`);
}

const p1 = new Pessoa('Nathan', 'Silva');
const p2 = new Pessoa2('Nathan', 'Silva');