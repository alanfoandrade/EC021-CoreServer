import 'dotenv/config';
import restify from 'restify';

import cors from 'cors';
import * as Sentry from '@sentry/node';

import sentryConfig from './config/sentryConfig';
import authRoutes from './routes/auth.routes';
import memeRoutes from './routes/meme.routes';

class App {
  constructor() {
    // Criação do server restify
    this.server = restify.createServer({ name: 'app' });

    // Módulo de captura de erros
    Sentry.init(sentryConfig);

    this.middlewares();
    this.routes();
  }

  middlewares() {
    // Configura o path para ignorar a / no final
    this.server.pre(restify.pre.sanitizePath());
    // Módulo de captura de erros
    this.server.use(Sentry.Handlers.requestHandler());
    // Configura o restify para aceitar JSON
    this.server.use(restify.plugins.jsonBodyParser());
    // Possibilita o acesso de outra API
    this.server.use(cors());
  }

  routes() {
    // Importação das rotas de autenticacao
    authRoutes.applyRoutes(this.server);
    // Importação das rotas de meme
    memeRoutes.applyRoutes(this.server);

    // Captura de erros
    this.server.use(Sentry.Handlers.errorHandler());
  }
}

export default new App().server;
