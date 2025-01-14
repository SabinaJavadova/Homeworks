const express = require("express");

const {getAllData, deleteData} = require ("../controllers/index")


const router = express.Router()

router.get("/",getAllData)
router.delete("/:id",deleteData)


module.exports = router