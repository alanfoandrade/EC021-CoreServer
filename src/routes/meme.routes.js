import { Router } from 'restify-router';

import authMiddleware from '../app/middlewares/authMiddleware';
import MemeController from '../app/controllers/MemeController';

const memeRoutes = new Router();

// Rotas com autenticação
memeRoutes.use(authMiddleware);
// Lista todos os memes cadastrados
memeRoutes.get('/meme', MemeController.index);
// Exibe meme por id via params
memeRoutes.get('/meme/:memeid', MemeController.show);
// Cria novo meme
memeRoutes.post('/meme', MemeController.store);
// Edita meme por id via params
memeRoutes.patch('/meme/:memeid', MemeController.update);
// Exclui meme por id via body
memeRoutes.del('/meme', MemeController.delete);

export default memeRoutes;
