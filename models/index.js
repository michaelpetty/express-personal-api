const mongoose = require('mongoose');
mongoose.connect( process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/personal-api', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('mongodb connected'))
  .catch((err) => console.log(err));

module.exports.Play = require('./play');
