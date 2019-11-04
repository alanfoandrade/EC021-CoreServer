import * as restify from 'restify';

import * as Sentry from '@sentry/node';
import sentryConfig from './config/sentryConfig';

import routes from './routes';

class App {
  constructor() {
    this.server = restify.createServer({ name: 'app' });

    Sentry.init(sentryConfig);

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.pre(restify.pre.sanitizePath());
    this.server.use(Sentry.Handlers.requestHandler());
    this.server.use(restify.plugins.jsonBodyParser());
    this.server.use(restify.plugins.queryParser());
  }

  routes() {
    routes.applyRoutes(this.server);

    this.server.use(Sentry.Handlers.errorHandler());
  }
}

export default new App().server;
