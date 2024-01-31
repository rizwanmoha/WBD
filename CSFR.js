var cookieParser = require('cookie-parser');

var bodyParser = require('body-parser');

var express = require('express');

var parseForm  = bodyParser.urlencoded({extended : false});

var app = express();



app.set("view engine" , "ejs");



app.use(cookieParser());

app.get('/form' , function(req , res) {
    res.render('csrf1.ejs')
})

app.listen('/process' , parseForm , function(req , res){
    res.send("data is being processed");
})

app.listen(4000);