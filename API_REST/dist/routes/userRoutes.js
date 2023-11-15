"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserControllers = require('../controllers/UserControllers'); var _UserControllers2 = _interopRequireDefault(_UserControllers);

var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const routes = new (0, _express.Router)();

// routes.get('/', loginRequired, userController.index);
// routes.get('/:id', userController.show);

routes.post('/', _UserControllers2.default.store);
routes.put('/:id', _loginRequired2.default, _UserControllers2.default.update);
routes.delete('/:id', _loginRequired2.default, _UserControllers2.default.delete);

exports. default = routes;

/*
index -> lista todos os usuarios - GET
store/create - cria um novo usuario - POST
delete = apaga um usuario - DELETE
show = mostra um usuario - GET
update - atualiza um usuario - PATCH OU PUT
*/
