const express = require("express");
const morgan = require('morgan');

const app = express();

//Using morgan function which will return a middleware
//app.use(morgan('dev')); //Global middleware

app.get("/",morgan("dev"),(req,res) => {
    res.send("Hello World!");
});

app.get("/about",(req,res) => {
    res.send("About Page");
});

app.listen(5000,() => {
    console.log("Server running!!...");
})