const router = require("express").Router();
const {getAllContacts,createContact,getContactsById,deleteContactById,updateContactById} = require('./controller');

router.get("/",getAllContacts);
router.post("/",createContact);
router.get("/:id",getContactsById);
router.put("/:id",updateContactById);
router.delete("/:id",deleteContactById);

module.exports = router;