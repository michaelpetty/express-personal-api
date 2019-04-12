// require express and other modules
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// parse incoming urlencoded form data
// and populate the req.body object
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

const db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', (req, res) => {
  res.json({
    title: "A view into MichaelP",
    description: "a personal look into who is Michael Petty ",
    contact: {
      name: "API Support",
      url: "http://www.test.com/support",
      email: "no-reply@test.com"},
    message: "Welcome to my personal api! Here's how you can use it!",
    documentationUrl: "https://github.com/michaelpetty/express-personal-api/blob/master/README.md",
    baseUrl: "https://peaceful-beach-38261.herokuapp.com/",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me"},
      {method: "GET", path: "/api/plays", description: "Index of all theatre productions"},
      {method: "GET", path: "/api/plays/:playId", description: "Show specifics of one theatre production"},
      {method: "POST", path: "/api/plays", description: "Create a new theatre production"},
      {method: "PUT", path: "/api/plays/:playId", description: "Update one specific theatre production"},
      {method: "DELETE", path: "/api/plays/:playId", description: "Delete one theatre production"}
    ]
  })
});

app.get('/api/profile', (req, res) => {
  res.json({
    name: "Michael Petry",
    githubUsername: "michaelpetty",
    githubLink: "https://github.com/michaelpetty",
    githubProfileImage: "https://avatars3.githubusercontent.com/u/15915049",
    personalSiteLink: "http://codetojoy.tech",
    currentCity: "San Francisco",
    pets: [
      {name: "Moxie", type: "dog", age: "10"}
    ]
  })
});

// get all plays INDEX
app.get('/api/plays', (req, res) => {
  db.Play.find()
    .exec((err, allPlays) => {
    if (err) return res.json({error: err});
    res.json({data: allPlays});
  })
});


/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, () => {
  console.log('Personal API server is up and running');
});
