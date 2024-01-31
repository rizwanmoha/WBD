var cookieParser = require('cookie-parser');

var bodyParser = require('body-parser');

var express = require('express');

var parseForm  = bodyParser.urlencoded({extended : false});
var csrf = require('csurf');

var csrfProtection = csrf({extended : false});

var app = express();



app.set("view engine" , "ejs");



app.use(cookieParser());

app.get('/form' ,csrfProtection, function(req , res) {
    res.render('csrf1.ejs' , {crsfToken : req.csrfToken});
})

app.listen('/process' ,parseForm , csrfProtection,  function(req , res){
    res.send("data is being processed");
})

app.listen(4000);