const Post = require("../models/postModel");

exports.getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();

    res.status(200).json({
      status: "OK",
      results: posts.length,
      data: {
        posts,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "Not found",
    });
  }
};

exports.getOnePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);

    res.status(200).json({
      status: "OK",
      data: {
        post,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "Not found",
    });
  }
};

exports.createPost = async (req, res, next) => {
  try {
    const post = await Post.create(req.body);

    res.status(201).json({
      status: "Created",
      data: {
        post,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "Bad request",
    });
  }
};

exports.updatePost = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "OK",
      data: {
        post,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "Not found",
    });
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "OK",
    });
  } catch (error) {
    res.status(204).json({
      status: "No Content",
    });
  }
};
