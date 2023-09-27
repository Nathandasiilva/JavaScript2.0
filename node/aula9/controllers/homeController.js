exports.paginaIncial = (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type"text" name="nome">
    <button>Ola mundo</button> 
    `);
};

exports.trataPost = (req, res) => {
    res.send('Sou sua nova rota de POST.')
};