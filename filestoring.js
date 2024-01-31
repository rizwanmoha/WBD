const path = require('path');

const express = require('express');
const multer = require('multer');

const app = express();

const fileStorageEngine = multer.diskStorage({
    destination : (req , file , cb) =>{
        cb(null , "./images");
    },
    filename: (req , file , cb) =>{
        cb(false , Date.now() + "--" + file.originalname);
    },

});

app.get("/" , (req , res) =>{
    res.sendFile(path.join(__dirname , "index.html"));
})

const upload = multer({storage : fileStorageEngine});



app.post('/single' ,upload.single("image") ,  (req , res) =>{
    console.log(req.file);
    res.send("File uploaded success");
});


app.post('/multiple' , upload.array("images" , 3) , (req , res) =>{
    console.log(req.files);

    res.send("files uploaded")
})

app.listen(8080);