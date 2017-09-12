// Json schema for our task model
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var taskModel = new Schema({
    title: {
        type: String
    },
    creator: {
        type: String
    },
    createdAt: {
        type: String
    },
    status: {
        type: String
    },
    Alarm: {
        type: String
    }
});

module.exports = mongoose.model('Task', taskModel);