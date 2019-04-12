const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlaySchema = new Schema({
  title: String,
  author: String,
  theatre: String,
  openingNight: Date,
  role: String,
  lead: Boolean,
  image: String
})

const Play = mongoose.model('Play', PlaySchema);
module.exports = Play;
