// Factory functions / Constructor functions / Classes
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

// {} <- this -> this

const p1 = new Pessoa('Nathan', 'da Silva');
const p2 = new Pessoa('Icaro', 'Silva');
console.log(p1);