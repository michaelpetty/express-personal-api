const mongoose = require('mongoose');
mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost:27017/personal-api', {useNewUrlParser: true, useFindAndModify: false})
  .then(() => console.log('mongodb connected'))
  .catch((err) => console.log(err));

module.exports.Play = require('./play');
