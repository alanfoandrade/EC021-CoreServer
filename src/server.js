import app from './app';

// Inicia o server restify, configurado em app.js, na porta configurada
app.listen(process.env.APP_PORT, () =>
  console.log(`*** API iniciada, utilizando porta ${process.env.APP_PORT} ***`)
);
