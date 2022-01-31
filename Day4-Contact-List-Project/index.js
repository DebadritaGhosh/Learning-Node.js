const express = require("express");
const app = express();

const {getAllContacts} = require("./controller");

app.get("/contacts",getAllContacts);
app.post("/contacts");
app.get("/contacts/:id");
app.put("/contacts/:id");
app.delete("/contacts/:id");

app.listen(5000,() => {
    console.log("Server Running!...");
})