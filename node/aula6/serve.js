const express = require('express');
const app = express();

//          CRIAR    LET  ATUALIZAR APAGAR
// CRUD -> CREATE,  READ,  UPDATE,  DELETE
//          POST     GET     PUT    DELETE

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type"text" name="nome"
    <button>ENVIAR</button> 
    `)
});

app.post('/', (req, res) => {
    res.send('Recebi a formulario')
})

app.get('/contato', (req, res) => {
    res.send('Obrigado por entra em contato')
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando a porta 3000');
});