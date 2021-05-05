const express = require("express");
const bcrypt = require("bcrypt");
const app = express();
const { Post, User, Image, Hashtag, Comment, PostLike, SubComment } = require("../models");
const router = express.Router();
const path = require("path");
const { Op } = require("sequelize");

router.post("/:postId", async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: { id: req.params.postId },
    });
    if (!post) {
      return res.status(403).send("no exist post");
    }
    const comment = await Comment.create({
      content: req.body.content,
      PostId: parseInt(req.params.postId),
      UserId: req.body.userId,
    });
    const fullComment = await Comment.findOne({
      where: { id: comment.id },
      include: [
        {
          model: User,
          attributes: ["id", "name", "icon"],
        },
      ],
    });
    User.update(
      {
        recentComment: parseInt(req.params.postId, 10),
      },
      { where: { id: parseInt(req.body.userId, 10) } }
    );
    res.status(201).json(fullComment);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete("/:CommentId", async (req, res, next) => {
  try {
    await Comment.destroy({
      where: { id: req.params.CommentId },
    });
    res.status(200).json({ CommentId: parseInt(req.params.CommentId, 10) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post("/edit/:CommentId", async (req, res) => {
  try {
    const newComment = await Comment.update(
      {
        content: req.body.content,
      },
      { where: { id: req.params.CommentId } }
    );
    res
      .status(201)
      .json({ CommentId: parseInt(req.params.CommentId, 10), newComment: req.body.content });
  } catch (error) {
    console.error(error);
  }
});

router.patch("/like/:UserId/:CommentId", async (req, res, next) => {
  try {
    const comment = await Comment.findOne({ where: { id: req.params.CommentId } });
    if (!comment) {
      return res.status(403).send("no comment exist");
    }
    await comment.addCommentLikers(req.params.UserId);
    res.status(200).json({
      CommentId: parseInt(req.params.CommentId, 10),
      UserId: parseInt(req.params.UserId, 10),
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete("/unlike/:UserId/:CommentId", async (req, res, next) => {
  try {
    const comment = await Comment.findOne({ where: { id: parseInt(req.params.CommentId, 10) } });
    if (!comment) {
      return res.status(403).send("no comment exist");
    }
    await comment.removeCommentLikers(parseInt(req.params.UserId, 10));
    res.status(200).json({
      CommentId: comment.id,
      UserId: parseInt(req.params.UserId, 10),
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post("/sub/:CommentId", async (req, res, next) => {
  try {
    const comment = await Comment.findOne({
      where: { id: req.params.CommentId },
    });
    if (!comment) {
      return res.status(404).send("no exist post");
    }
    const subComment = await SubComment.create({
      content: req.body.content,
      CommentId: parseInt(req.params.CommentId),
      UserId: req.body.UserId,
      PostId: req.body.PostId,
    });
    const fullSubComment = await SubComment.findOne({
      where: { id: subComment.id },
      include: [
        {
          model: User,
          attributes: ["id", "name", "icon"],
        },
      ],
    });
    res.status(201).json({ fullSubComment, CommentId: parseInt(req.params.CommentId, 10) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete("/sub/:CommentId/:SubCommentId", async (req, res, next) => {
  try {
    await SubComment.destroy({
      where: { id: req.params.SubCommentId },
    });
    res.status(200).json({
      CommentId: parseInt(req.params.CommentId, 10),
      SubCommentId: parseInt(req.params.SubCommentId, 10),
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post("/sub/edit/:CommentId/:SubCommentId", async (req, res) => {
  try {
    const newSubComment = await SubComment.update(
      {
        content: req.body.content,
      },
      { where: { id: req.params.SubCommentId } }
    );
    res.status(201).json({
      CommentId: parseInt(req.params.CommentId, 10),
      content: req.body.content,
      SubCommentId: parseInt(req.params.SubCommentId, 10),
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
