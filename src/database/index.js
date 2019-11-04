const mongoose = require('mongoose');

require('dotenv/config');

mongoose.Promise = global.Promise;

mongoose.connect(`${process.env.MONGO_URL}`, {
  dbName: `${process.env.MONGO_DB}`,
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
module.exports = mongoose;
