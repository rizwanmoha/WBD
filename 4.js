const express = require('express');

const app = express();

const router = express.Router();
const M1 = require('./M1');

router.get('/' , M1 , function(req , res){
    res.send('Welcome to the website');
})


app.use('/' , router);

app.listen(5000)