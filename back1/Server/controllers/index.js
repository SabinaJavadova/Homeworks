const blogModel = require("../models/index")

const getAllData = async (req,res) => {
    const allData = blogModel.find();
    res.send(allData);
}

const deleteData = async (req,res) => {
    const id = req.params.id;
    const deleted =await blogModel.findByIdAndDelete(id);
}



module.exports = {
    getAllData,
    deleteData
}