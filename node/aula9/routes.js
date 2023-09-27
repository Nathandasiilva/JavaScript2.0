const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const contatoController = require('./controllers/contatoController');

// Rotas da home
route.get('/', homeController.paginaIncial);
route.post('/', homeController.trataPost)

// Rotas de contatos

route.get('/contato', contatocontroller.paginaIncial)




module.exports = route;
