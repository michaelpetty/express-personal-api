const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlaySchema = new Schema({
  title: String,
  theatre: String,
  openingNight: {
    type: Date,
    default: Date.now
  },
  role: String,
  lead: Boolean,
  image: String
})

const Play = mongoose.model('Play', PlaySchema);
module.exports = Play;
