const express = require('express');
var bodyParser = require('body-parser');

const cookieSession = require('cookie-session');
const passport = require('passport');

const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
const taskRouter = require('./routes/task-router');

const passportSetup = require('./config/passport-setup');
const keys = require('./config/keys');

var path = require('path');
var bodyParser = require('body-parser');

const app = express();

app.use(
  cookieSession({
    name: 'awesomeCookie',
    httpOnly: false,
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

const mongoose = require('mongoose');
const db = mongoose.connect(
  'mongodb://test:Test123@ds052978.mlab.com:52978/items',
  { useNewUrlParser: true }
);

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);
app.use('/api/tasks', taskRouter);

app.use(function(err, req, res, next) {
  /* console.log(err) */
  res.status(422).send({ error: err.message });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
