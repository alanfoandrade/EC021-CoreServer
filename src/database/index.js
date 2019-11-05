import mongoose from 'mongoose';

import 'dotenv/config';

mongoose.Promise = global.Promise;

// Cria conexão com o bando de memes
mongoose.connect(`${process.env.MONGO_URL}`, {
  dbName: `${process.env.MONGO_DB}`,
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// Exporta conexão
export default mongoose;
