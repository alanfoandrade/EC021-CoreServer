import { Router } from 'restify-router';
import AuthController from './app/controllers/AuthController';
import MemeController from './app/controllers/MemeController';
import authMiddleware from './app/middlewares/authMiddleware';

const routes = new Router();

routes.post('/auth/login', AuthController.store);

routes.post('/memes', authMiddleware, MemeController.store);
routes.get('/memes/:memeid?', authMiddleware, MemeController.index);
routes.put('/memes/:memeid', authMiddleware, MemeController.update);
routes.del('/memes/:memeid', authMiddleware, MemeController.delete);

export default routes;
