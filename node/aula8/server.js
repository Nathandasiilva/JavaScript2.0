const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type"text" name="nome"
    <button>Ola mundo</button> 
    `)
});

app.get('/testes/:idUsuario?/:parametro?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.facebookprofile);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O que você me envio foi ${req.body.qualquercoisa}`);
});


app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando a porta 3000');
});