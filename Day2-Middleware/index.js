const express = require("express");
const morgan = require('morgan');

const app = express();

//Using morgan function which will return a middleware
//app.use(morgan('dev')); //Global middleware

//Creating custon middleware
function custonmMiddleware(req,res,next) {
    if(req.url === "/"){
        console.log("first middleware!");
    }
    next();
}

//Creating another custon middleware
function tinyLogger(){
    return (req,res,next) => {
        console.log(`${req.method} - ${req.url}`);
        next();
    }
}

//Using miltiple middleware
const middleware = [custonmMiddleware,tinyLogger()];

//Using custom middleware
app.use(middleware);

app.get("/",(req,res) => { //Using middleware for single route
    res.send("Hello World!");
});

app.get("/about",(req,res) => {
    res.send("About Page");
});

app.listen(5000,() => {
    console.log("Server running!!...");
})