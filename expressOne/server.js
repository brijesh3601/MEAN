// server.js
// load the things we need
//run using => node server.js
//Package Installation => 1) npm install express 2) npm install ejs 
//Sublime : Alt+F3 for multiple selections edit 

var express = require('express');
var app = express();

var path = require('path');

var fs = require("fs");


// set the view engine to ejs

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname + '/views')); // this is reqd to call .ejs file
app.use(express.static(path.join(__dirname + '/views'))); // this is reqd to call static file like .html file
app.use(express.static(path.join(__dirname + '/node_modules')));
// use res.render to load up an ejs view file

// static html file index.html will be called
app.get('/', function(req, res,next) {
    res.render('index');
    //res.send("hello");
});


app.get('/changeAvatar', function(req, res,next) {

var result = fs.readFileSync('data\\avatar.json');

res.setHeader('Content-Type', 'application/json');

res.send(result.toString());

});



app.get('/getAllPlants', function(req, res,next) {

var result = fs.readFileSync('data\\plants.json');

res.setHeader('Content-Type', 'application/json');

res.send(result.toString());

});


//server test.ejs file will be called
app.get('/test', function(req, res,next) {
    res.render('test');

    //res.send("hello");
});


app.listen(8888);
console.log('8888 is the magic port');