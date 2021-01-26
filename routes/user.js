const express = require("express")
const router = express.Router();
const usercontroller = require("../controllers/usercontroller");

router.post('/check', usercontroller.fetch_by_phone_no);
router.post('/register', usercontroller.create_user);

module.exports=router;
