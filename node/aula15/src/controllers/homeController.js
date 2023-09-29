exports.paginaIncial = (req, res) => {
    req.session.usuario = {}
    res.render('index');
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};