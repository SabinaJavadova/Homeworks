const express = require("express");

const {
  getAllData,
  getDataById,
  postData,
  deleteData,
  putData,
} = require("../controller/index");

const router = express.Router();

router.get("/wines", getAllData);
router.get("/:id", getDataById);
router.post("/", postData);
router.delete("/:id", deleteData);
router.put("/:id", putData);

module.exports = router;
