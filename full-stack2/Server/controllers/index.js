const wineModel = require("../models/index");

const getAllData = async (req, res) => {
  const wine = await wineModel.find();
  res.send(wine);
};

const deleteData = async (req, res) => {
  const id = req.params.id;
  const deleted = await wineModel.findByIdAndDelete(id);
};

const createData = async (req, res) => {
  const newData = wineModel({ ...req.body });
  newData.save();
  res.status(201).json({
    message: "added",
    wine: newData,
  });
};

const putData = async (req, res) => {
  const id = req.params.id;
  const puted = await wineModel.findByIdAndUpdate(
    id,
    { ...req.body },
    { new: true }
  );

  if (!puted) {
    return res.status(404).json({message:"not found"})
  }
  res.status(201).json({
    message:"added",
    puted:puted
  })
};

module.exports = {
  getAllData,
  deleteData,
  createData,
  putData
};
