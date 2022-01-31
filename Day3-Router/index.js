const express = require('express');
const app = express();

//-----------------------------
const userRouter = require("./userRoute");
const postRouter = require("./postRoute");


app.use("/user",userRouter);
app.use("/post",postRouter);

//------------------------------

app.get("/",(req,res) => {
    res.send("<h1> Hello World ! </h1>")
});

app.listen(5000,() => {
    console.log("Server Running!!..");
});