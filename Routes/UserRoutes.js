const express = require("express");
const { Signup, Login } = require("./Controllers/Modals/UserController");


const router = express.Router()



router.post("/", Signup);

router.post("/Login", Login);



module.exports=router;
///export default router