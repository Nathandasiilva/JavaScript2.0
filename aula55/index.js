// IIFE -> Immediately invoked functiom expression

(function(idade, peso, altura) {

    const sobreNome = 'Silva';
    function criaNome(nome) {
        return nome + ' ' + sobreNome;
    }

    function falaNome() {
        console.log(criaNome('Nathan'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(20, 84, 1.80);