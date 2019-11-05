import { Router } from 'restify-router';

import AuthController from './app/controllers/AuthController';
import MemeController from './app/controllers/MemeController';
import authMiddleware from './app/middlewares/authMiddleware';

const routes = new Router();

// Rotas sem autenticação
routes.post('/auth/login', AuthController.store);

// Rotas com autenticação
// Lista todos os memes cadastrados
routes.get('/meme', authMiddleware, MemeController.index);
// Exibe meme por id via params
routes.get('/meme/:memeid', authMiddleware, MemeController.show);
// Cria novo meme
routes.post('/meme', authMiddleware, MemeController.store);
// Edita meme por id via params
routes.patch('/meme/:memeid', authMiddleware, MemeController.update);
// Exclui meme por id via body
routes.del('/meme', authMiddleware, MemeController.delete);

export default routes;
