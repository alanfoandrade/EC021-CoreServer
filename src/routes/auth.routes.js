import { Router } from 'restify-router';

import AuthController from '../app/controllers/AuthController';

const routes = new Router();

// Rotas sem autenticação
routes.post('/auth/login', AuthController.store);

export default routes;
