const express = require("express");
const router = express.Router();
const { Post, User, Image, Comment, Hashtag, Quiz } = require("../models");
const { Op } = require("sequelize");

router.post("/", async (req, res) => {
  try {
    if (parseInt(req.body.UserId, 10) !== 1) {
      res.status(401).send("You are not a Admin");
      return;
    }
    if (req.body.password !== process.env.ADMIN_PASS) {
      res.status(401).send("Wrong Password");
      return;
    }
    const quizPost = await Quiz.create({
      type: req.body.type,
      question: req.body.question,
      answer: req.body.answer,
      UserId: 1,
    });
    res.status(201).send("add Success");
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
