import { Router } from 'express';
import userController from '../controllers/UserControllers';

const routes = new Router();

routes.post('/', userController.store);
routes.get('/', userController.index);
routes.get('/:id', userController.show);
routes.put('/:id', userController.update);
routes.delete('/:id', userController.delete);

export default routes;

/*
index -> lista todos os usuarios - GET
store/create - cria um novo usuario - POST
delete = apaga um usuario - DELETE
show = mostra um usuario - GET
update - atualiza um usuario - PATCH OU PUT
*/
