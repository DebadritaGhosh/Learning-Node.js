//creating router object
const router = require("express").Router();

//Importing Controllers for post route
const {getAllPosts,createNewPost} = require("./postController");

router.get("/",getAllPosts);

router.post("/",createNewPost);


//Exporting Router
module.exports = router;