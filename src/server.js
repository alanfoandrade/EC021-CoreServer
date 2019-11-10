import app from './app';

// Inicia o server restify, configurado em app.js, na porta configurada
app.listen(process.env.APP_PORT, () =>
  console.log(
    `*** Servico iniciado, utilizando porta ${process.env.APP_PORT} ***`
  )
);
