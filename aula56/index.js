// Factory function (Função frabrica)
// Constructor faction (Função construtora)
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome, 

        //Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome} `;
        },

        //Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala(assunto) {
            return `${nome} esta ${assunto}, Mas ${nome} tem ${peso}Kg com ${altura} de altura`;
        },

        altura: altura,

        peso: peso,

        // Getter 
        get imc() {
        const indice = this.peso / (this.altura ** 2);
        return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Nathan', 'Silva', 1.80, 80);
const p2 = criaPessoa('Nathan', 'Silva', 1.50, 40);
const p3 = criaPessoa('Nathan', 'Silva', 1.90, 55);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);



//p1.nomeCompleto = 'Natha da Silva';
//console.log(p1.nome);
//console.log(p1.sobrenome);


//console.log(p1.nome);
//console.log(p1.sobrenome);
//console.log(p1.imc);

//console.log(p1.imc());
//const p2 = criaPessoa('Flavia', 'Maria', 1.65, 77);
//console.log(p2.imc());
//console.log(p1.fala('Esta falando de marmita'));