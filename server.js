const express = require('express');
var bookRouter = require('./routes/bookRouter');
var bodyParser = require("body-parser");

const cookieSession = require('cookie-session');
const passport = require('passport');
const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
const passportSetup = require('./config/passport-setup');
const keys = require('./config/keys');

var path = require("path");
var bodyParser = require("body-parser");

const app = express();

app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [keys.session.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());

const mongoose = require("mongoose");
const db = mongoose.connect(
  'mongodb://test:Test123@ds052978.mlab.com:52978/items',
  { useNewUrlParser: true });

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ 
    /* express: 'Hello From Express' */
    players: [
      { number: 1, name: "Ben Blocker", position: "G" },
      { number: 2, name: "Dave Defender", position: "D" },
      { number: 3, name: "Sam Sweeper", position: "D" },
      { number: 4, name: "Matt Midfielder", position: "M" },
      { number: 5, name: "William Winger", position: "M" },
      { number: 6, name: "Fillipe Forward", position: "F" }
    ]  
   });
});


app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);
app.use('/api/books', bookRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));