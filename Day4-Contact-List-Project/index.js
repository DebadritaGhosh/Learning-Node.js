const express = require("express");
const morgan = require("morgan");

const contactRoutes = require('./contactRoutes');

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/contacts',contactRoutes);


app.get('*',(req,res) => {
    res.send("<h1> Error 404 Not Found!! </h1>")
});

app.listen(5000,() => {
    console.log("Server Running!...");
})