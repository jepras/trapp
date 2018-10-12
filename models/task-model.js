var mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create team schema
/* const teamModel = new Schema({
    name: {}
    /* members: []
}) */


// Create task schema
const taskModel = new Schema({
    name: { 
        type: String,
        required: [true, 'Name field is required']
    },
    description: { type: String, required: [true, 'description field is required'] },
    date: { type: String },
    status: { type: Boolean, default: false },
    team: { type: String }
    // add in geo location
})

module.exports = mongoose.model('task', taskModel);