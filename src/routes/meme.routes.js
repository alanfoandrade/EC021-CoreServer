import { Router } from 'restify-router';

import authMiddleware from '../app/middlewares/authMiddleware';
import MemeController from '../app/controllers/MemeController';

const routes = new Router();

// Rotas com autenticação
routes.use(authMiddleware);
// Lista todos os memes cadastrados
routes.get('/meme', MemeController.index);
// Exibe meme por id via params
routes.get('/meme/:memeid', MemeController.show);
// Cria novo meme
routes.post('/meme', MemeController.store);
// Edita meme por id via params
routes.patch('/meme/:memeid', MemeController.update);
// Exclui meme por id via body
routes.del('/meme', MemeController.delete);

export default routes;
