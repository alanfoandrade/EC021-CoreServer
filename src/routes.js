import { Router } from 'restify-router';
import AuthController from './app/controllers/AuthController';
import MemeController from './app/controllers/MemeController';
import authMiddleware from './app/middlewares/authMiddleware';

const routes = new Router();

routes.post('/auth/login', AuthController.store);

routes.post('/meme', authMiddleware, MemeController.store);
routes.patch('/meme/:memeid', authMiddleware, MemeController.update);
routes.get('/meme/:memeid?', authMiddleware, MemeController.index);
routes.del('/meme', authMiddleware, MemeController.delete);

export default routes;
