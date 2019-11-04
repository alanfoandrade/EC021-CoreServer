import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

mongoose.connect(
  'mongodb+srv://adauto:adauto@cluster0-rven8.mongodb.net/test?retryWrites=true&w=majority',
  {
    dbName: 'ec021-av2-core',
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  }
);
module.exports = mongoose;
