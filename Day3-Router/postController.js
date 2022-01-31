exports.getAllPosts = (req,res) => {
    console.log(req.query); //Query string
    res.send("Render all posts!..");
};

exports.createNewPost = (req,res) => {
    res.send("Create New Post!..");
};