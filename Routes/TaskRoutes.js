const express = require("express");
const { GetAllTask, CreateTask, Install, Removal, GetSingleTask, UpdateSingleTask, DeleteSingleTask } = require("./Controllers/Task");

const router = express.Router()
router.get("/", GetAllTask);


router.post("/", CreateTask);



router.get("/:id", GetSingleTask);

router.delete("/:id", DeleteSingleTask);

router.put("/:id", UpdateSingleTask)

module.exports=router;