import { Router } from 'express';
import userController from '../controllers/UserControllers';

import loginRequired from '../middlewares/loginRequired';

const routes = new Router();

// routes.get('/', loginRequired, userController.index);
// routes.get('/:id', userController.show);

routes.post('/', userController.store);
routes.put('/:id', loginRequired, userController.update);
routes.delete('/:id', loginRequired, userController.delete);

export default routes;

/*
index -> lista todos os usuarios - GET
store/create - cria um novo usuario - POST
delete = apaga um usuario - DELETE
show = mostra um usuario - GET
update - atualiza um usuario - PATCH OU PUT
*/
