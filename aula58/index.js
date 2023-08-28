// Função construtora -> objeto
// Função fabrica -> objeto
// Construtora -> Pessoa (new)

 function Pessoa(nome, sobrenome) {
    // Atributo privado
    const ID = 123456;
    const metodoInterno = function() {};

    // Atributo ou método prublico
    this. nome = nome;
    this. sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': sou um método');

    };

 }

 const p1 = new Pessoa ('Nathan', 'Silva');
 const p2 = new Pessoa ('Daniel', 'Mota');
 p2.metodo();