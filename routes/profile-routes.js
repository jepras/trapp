const router = require('express').Router();

var User = require('../models/user-model')

/* const authCheck = (req, res, next) => {
    if(!req.user){
        res.redirect('/auth/login');
    } else {
        next();
    }
};

router.get('/', authCheck, (req, res) => {
    res.json('profile', { user: req.user });
}); */

router.route('/')
    .get((req, res) => {
        User.find({}, (err, person) => {
            res.json(person)
        })  
    })

module.exports = router;