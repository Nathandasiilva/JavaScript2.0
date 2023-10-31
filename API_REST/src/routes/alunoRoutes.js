import { Router } from 'express';
import alunoController from '../controllers/AlunoControllers';

const routes = new Router();

routes.get('/', alunoController.index);

export default routes;
