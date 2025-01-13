const express = require('express')

const {getAllData, deleteData, createData, putData

} = require("../controllers/index")


const router = express.Router()

router.get("/",getAllData)
router.delete("/:id",deleteData)
router.post("/",createData)
router.put("/:id",putData)

module.exports = router
