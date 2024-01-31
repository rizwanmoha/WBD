//   const M1 = (req , res , next) =>{
//     console.log("Middleware 1");
//     next();
// }

const M1 = (req , res , next) =>{
    console.log(req.query.age);
    if(req.query.age > 18){
        next();
    }
    else{
        res.send("You are not eligible for this ")
    }
}


module.exports = M1;


module.exports = M1;