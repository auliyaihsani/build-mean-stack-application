// importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');
// use express
var app = express();

const route = require('./routes/route');
// connect to mongo db
mongoose.connect('mongodb://localhost:27017/contactlist');

// on connection
mongoose.connection.on('connected', ()=>{
    console.log('connected to database mongodb @ 27017');
});

mongoose.connection.on('error', (err)=>{
    if (err) {
        console.log('error in database connection:' +err);
    }

});


// port
const port = 3000;
// adding middleware
app.use(cors());
// body-parser
app.use(bodyparser.json());
// static files
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/api', route);
// test server
app.get('/', (req, res)=>{
    res.send('hello friend');
});
app.listen(port, ()=>{
    console.log('server started at port :'+port);
});










