const express = require("express");
const router = express.Router();
const { Post, User, Image, Comment, Hashtag } = require("../models");
const { sequelize } = require("../models/index");
const { Op, QueryTypes } = require("sequelize");

router.post("/", async (req, res) => {
  try {
    const searchPosts = await Post.findAll({
      where: {
        [Op.or]: [
          { title: { [Op.like]: `%${req.body.keyword}%` } },
          { content: { [Op.like]: `%${req.body.keyword}%` } },
        ],
      },
      attributes: {
        exclude: ["thumbnail", "imagePath"],
      },
    });
    res.status(200).json({ searchPosts, searchedKeyword: req.body.keyword });
  } catch (error) {
    console.error(error);
  }
});

router.post("/hashtag", async (req, res) => {
  try {
    const hashtagPosts = await Post.findAll({
      attributes: {
        exclude: ["thumbnail", "imagePath"],
      },
      include: [
        {
          model: Hashtag,
          attributes: ["name"],
          where: { name: { [Op.eq]: req.body.tag } },
        },
      ],
    });
    res.status(200).json({ hashtagPosts });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
