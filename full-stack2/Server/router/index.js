const express = require('express')

const {getAllData, deleteData, createData, putData,getDataById

} = require("../controllers/index")


const router = express.Router()

router.get("/",getAllData)
router.delete("/:id",deleteData)
router.post("/",createData)
router.put("/:id",putData)
router.get("/:id",getDataById)

module.exports = router
