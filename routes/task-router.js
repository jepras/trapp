var express = require('express');
var Task = require('../models/task-model');

const taskRouter = express.Router();

taskRouter
  .route('/all/')
  // GET
  .get((req, res, next) => {
    Task.find().then(function(tasks) {
      res.send(tasks);
    });
  });

taskRouter
  .route('/')
  .get((req, res, next) => {
    if (!req.user) {
      throw new Error();
    }

    Task.find({ team: [req.query.team] }).then(function(task) {
      res.send(task);
    });
  })
  // POST
  .post((req, res, next) => {
    console.log('post request to ' + req.body);
    /* var task = new Task(req.body); // Creates new instance of task in db through bodyparser
        task.save(); // Saves to mongoose db */
    Task.create(req.body)
      .then(function(task) {
        res.send(task);
      })
      .catch(next);
  });

taskRouter.route('/:id').put((req, res, next) => {
  Task.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function() {
    Task.findOne({ _id: req.params.id }).then(function(task) {
      res.send(task);
    });
  });
});
/* .delete((req, res, next) => {
    Task.findByIdAndRemove({ _id: req.params.id }).then(function(task) {
      res.send(task);
    });
  }); */

// New delete route for redux
taskRouter.route('/delete/:id').get(function(req, res) {
  Task.findByIdAndRemove({ _id: req.params.id }, function(err, task) {
    if (err) res.json(err);
    else res.json(req.params.id);
  });
});

/* res.send({
            type: 'POST',
            author: req.body.author,
            description: req.body.description,
            date: req.body.date,
            status: req.body.status
        })
    }) */

module.exports = taskRouter;
