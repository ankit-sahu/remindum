//mongoose takes the data from mongo db and converts it into JSON format for our use
var express = require('express'),
    mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/taskAPI');

//To transalte the data from DB, mongo uses model
var Task = require('./models/taskModel');
var app = express();
var port = process.env.PORT || 3000;

//for creating modular route handlers
var taskRouter = express.Router();

taskRouter.route('/Tasks')
    .get(function(req, res){

        var query = {};
        
        if(req.query.creator){
            query.creator = req.query.creator;
        }
        Task.find(query, function(err, tasks){
            if(err){
                console.log(err);
            }else{
                res.json(tasks);
            }
        });
    });

app.use('/api/', taskRouter);

app.get('/', function(req, res){
    res.send("Hello world");
})

app.listen(port, function(){
    console.log("running on port " + port);
})


