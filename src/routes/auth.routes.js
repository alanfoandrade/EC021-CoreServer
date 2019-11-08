import { Router } from 'restify-router';

import AuthController from '../app/controllers/AuthController';

const authRoutes = new Router();

// Rotas sem autenticação
authRoutes.post('/auth/login', AuthController.store);

export default authRoutes;
