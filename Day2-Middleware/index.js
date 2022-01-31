const express = require("express");
const morgan = require('morgan');

const app = express();

//Using morgan function which will return a middleware
//app.use(morgan('dev')); //Global middleware

//Creating custon middleware
function custonmMiddleware(req,res,next) {
    if(req.url === "/"){
        res.send("<h1> This is home page!! </h1>")
    }
    next();
}

//Using custom middleware
app.use(custonmMiddleware);

app.get("/",morgan("dev"),(req,res) => { //Using middleware for single route
    res.send("Hello World!");
});

app.get("/about",(req,res) => {
    res.send("About Page");
});

app.listen(5000,() => {
    console.log("Server running!!...");
})