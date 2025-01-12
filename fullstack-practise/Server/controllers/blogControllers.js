const modelBlogs = require("../Model/modelBlogs");

const getAllBlogs = async (req, res) => {
  const blogs = await modelBlogs.find();
  res.send(blogs);
};

const postBlog = async (req, res) => {
  const { img, country, title, description } = req.body;

  const newBlog = modelBlogs({ ...req.body });
  await newBlog.save();
  res.status(201).json({
    message: "blog added!",
    blog: newBlog,
  });
};

const deletedBlog = async (req, res) => {
  const id = req.params.id;
  const deleted = await modelBlogs.findByIdAndDelete(id);
};

const putBlog = async (req, res) => {
  const id = req.params.id;
  const puted = await modelBlogs.findByIdAndUpdate(
    id,
    {
      ...req.body,
    },
    {
      new: true,
    }
  );
  if (!puted) {
    return res.status(404).json({ message: "Blog not found" });
  }

  res.status(201).json({
    message: "uptaded",
    puted: puted,
  });
};

module.exports = {
  getAllBlogs,
  postBlog,
  deletedBlog,
  putBlog,
};
