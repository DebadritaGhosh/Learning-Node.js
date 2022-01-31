//creating router object
const router = require("express").Router();


router.get("/login",(req,res) => {
    res.send("I'm Login Route!..")
});

router.get("/logout",(req,res) => {
    res.send("I'm Logout Route!..")
});

router.get("/signup",(req,res) => {
    res.send("I'm SignUp Route!..")
});


//Exporting Router
module.exports = router;