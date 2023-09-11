class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + 'já ligado');
            return;
        }
        this.ligado = true;
    }

    delisgado() {
        if(!this.ligado) {
            console.log(this.nome + 'ja deligado');
            return;
        }
        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);

        this.cor = cor;
        this.modelo = modelo;
    }
}

class Table extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);

        this.cor = cor;
        this.modelo = modelo;
    }

    ligar() {
        console.log('Olha, você altero o metodo ligar.')
    }
};

const s1 = new Smartphone('Iphone', 'preto', 'iPhone 12'); 
    console.log(s1);
