const express = require('express');

const app = express();

const router = express.Router();

app.get('/' , function(req , res){
    res.send('Welcome to FSD track')
})

router.get('/fsd3' , function(req , res){
    res.send("this is WBD  course");
})

app.use('/' , router);

app.listen(3000)