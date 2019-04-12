// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.
const db = require('./models');

const seedPlays = [
  {
    title: "Annie",
    theatre: "Slidell Little Theatre",
    role: "Chorus",
    lead: false,
    image: "some img.jpg"
  },
  {
    title: "Annie",
    theatre: "Slidell Little Theatre",
    role: "Chorus",
    lead: false,
    image: "some img.jpg"
  },
  {
    title: "Annie",
    theatre: "Slidell Little Theatre",
    role: "Chorus",
    lead: false,
    image: "some img.jpg"
  },
  {
    title: "Annie",
    theatre: "Slidell Little Theatre",
    role: "Chorus",
    lead: false,
    image: "some img.jpg"
  }
];

db.Play.deleteMany({}, (err, deletedPlays) => {
  if (err) {
    console.log(`Error deleting plays: ${err}`);
    return;
  }
  console.log(`removed all plays: ${JSON.stringify(deletedPlays)}`);
  db.Play.create(seedPlays, (err, createdPlays) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`recreated all plays: ${createdPlays}`);
    console.log(`created ${createdPlays.length} plays`);
  })
})
