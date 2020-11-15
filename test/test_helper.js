const mongoose = require('mongoose');
const config = require('config');

const MONGO_URI = config.get('mongoURI');

mongoose.Promise = global.Promise;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

mongoose.connection
    .once('open', () => console.log('Connected!'))
    .on('error', (error) => {
        console.warn('Error : ',error);
    });
