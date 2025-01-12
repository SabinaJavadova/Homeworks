    const express = require("express");

    const {
        getAllBlogs,
        postBlog,
        deletedBlog,
        putBlog
    } =  require("../controllers/blogControllers")

    const router = express.Router();

    router.get("/blogs",getAllBlogs)
    router.delete("/blogs/:id",deletedBlog)
    router.post("/blogs",postBlog)
    router.put("/blogs/:id",putBlog)

    module.exports = router;