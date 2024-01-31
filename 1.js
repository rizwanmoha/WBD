const express = require('express');

const app = express();

// app.use(function(req , res , next){
//     res.send('Hello World');
    
// })

// app.get('/' , function(req , res){
//     res.send('Welcome');
// })

app.use('/fsd' , function(req , res , next){
    console.log(req.originalUrl);
    console.log(req.baseUrl);
    console.log(req.path);
    next();
})


app.listen(5000);