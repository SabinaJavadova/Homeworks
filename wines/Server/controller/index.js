const wineModel = require("../model/index");

const getAllData = async (req, res) => {
  try {
    const getData = await wineModel.find();
    res.status(200).json(getData);
  
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getDataById = async (req, res) => {
  const id = req.params.id;
  try {
    const getDataId = await wineModel.findById(id);
    if (!getDataId) {
      res.status(404).json({ message: "wines not found" });
    }
    res.status(200).json(getDataId);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const deleteData = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedData = await wineModel.findByIdAndDelete(id);

    if (!deletedData) {
      res.status(404).json({ message: "wine not found!" });
    }
    res.status(200).json({
      message: "deleted!",
      DeletedData: deletedData,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const postData = async (req, res) => {
  try {
    const newData = wineModel({ ...req.body });
    await newData.save();
    res.json({ message: "added!", newData: newData });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const putData = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedData = await wineModel.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );

    if (!updatedData) {
      res.status(404).json({ message: "not found!" });
    }
    res.status(200).json({ message: "uptaded!", updatedData: updatedData });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  getAllData,
  getDataById,
  deleteData,
  postData,
  putData,
};
