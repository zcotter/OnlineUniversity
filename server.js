var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var multer     = require('multer');

var cookieParser = require('cookie-parser');
var session      = require('express-session');

var CORS = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8000');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}
app.use(CORS);
app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'this is the secret' }));
app.use(multer());

app.use(express.static(__dirname + '/api'));

var courses = [ { name : "Java 101", category : "PROG", dateCreated : "1/1/2015", description : "Wow" },
{ name : "MongoDB 101", category : "DB", dateCreated : "2/1/2015", description : "Good" },
{ name : "Express 101", category : "PROG", dateCreated : "3/1/2015", description : "Better" },
{ name : "AngularJS 101", category : "WEB", dateCreated : "4/1/2015", description : "Best" },
{ name : "NodeJS 101", category : "PROG", dateCreated : "5/1/2015", description : "Awesome" } ];

app.get('/api/courses', function(request, response){
  response.json(courses);
});

app.get('/api/courses/:index', function(request, response){
  response.json(courses[request.params.index]);
})

app.post('/api/courses', function(request, response){
  courses.push(request.body.course);
  response.json(courses);
});

app.delete('/api/courses/:index', function(request, response){
  courses.splice(request.params.index, 1);
  response.json(courses);
});

app.put('/api/courses/:index', function(request, response){
  courses[request.params.index] = request.body.course;
  response.json(courses);
});

app.listen(3000);
