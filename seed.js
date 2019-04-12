// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.
const db = require('./models');

const seedPlays = [
  {
    title: "Annie",
    theatre: "Slidell Little Theatre",
    role: "Chorus",
    isMusical: true,
  },
  {
    title: "Snoopy!",
    theatre: "Slidell Little Theatre",
    role: "Linus",
    isMusical: true,
    openingNight: "05-02-1986",
    image: "/images/linus.jpg"
  },
  {
    title: "Oklahoma",
    theatre: "Slidell High School",
    role: "Chorus",
    isMusical: true,
    openingNight: "03-12-1986",
  },
  {
    title: "Wait Until Dark",
    theatre: "Slidell High School",
    role: "Mike Talman",
    openingNight: "10-25-1986",
    isMusical: false,
  },
  {
    title: "Bring Back Birdie",
    theatre: "Tulane Jr. Lyric",
    role: "Albert F. Peterson",
    isMusical: true,
    openingNight: "06-22-1985",
    image: "/images/birdie.jpg"
  },
  {
    title: "Dames at Sea",
    theatre: "Tulane Jr. Lyric",
    role: "Lucky",
    isMusical: true,
    openingNight: "06-25-1984",
    image: "/images/dames.jpg"
  },
  {
    title: "The Diary of Anne Frank",
    theatre: "Slidell High School",
    role: "Albert Dussell",
    isMusical: false,
    openingNight: "10-26-1985",
    image: "/images/annefrank.jpg"
  },
  {
    title: "Up the Down Staircase",
    theatre: "Slidell High School",
    role: "Joey",
    isMusical: false,
    openingNight: "03-12-1984",
  },
  {
    title: "The Most Happy Fella",
    theatre: "Slidell Little Theatre",
    role: "Chorus",
    isMusical: true,
    openingNight: "05-02-1983",
  },
  {
    title: "The Mouse that Roared",
    theatre: "Slidell High School",
    role: "General",
    isMusical: false,
    openingNight: "03-16-1983",
  },
  {
    title: "Carousel",
    theatre: "Slidell Little Theatre",
    role: "Chorus",
    isMusical: true,
    openingNight: "05-10-1984",
  },
  {
    title: "Oliver",
    theatre: "Slidell Little Theatre",
    role: "Chorus",
    isMusical: true,
    openingNight: "09-08-1981",
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
