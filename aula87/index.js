function rand (min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() *  (max - min) + min)
}

function esperaAi (msg, tempo) {
    return new Promise((resolver, reject) => {
        if(typeof msg !== 'string') reject('BAD VALEU');
        setTimeout(() => {
            resolver(msg);
        }, tempo);
    });
}

esperaAi('Conexão com o BD', rand (1, 3))
.then(respsota => {
    console.log(respsota);
    return esperaAi('Buscando dados da bese', rand(1, 3));
})
.then(respsota => {
    console.log(respsota);
    return esperaAi('Tratando dados da base', rand(1, 3));
})
.then(respsota => {
    console.log(respsota);
    return esperaAi('Exibe dados na tela', rand(1, 3));
})
.catch(e => {
    console.log('ERRO:', e);
});