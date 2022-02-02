const router = require("express").Router();
const {getAllContacts,createContact} = require('./controller');

router.get("/",getAllContacts);
router.post("/",createContact);
// router.get("/:id");
// router.put("/:id");
// router.delete("/:id");

module.exports = router;