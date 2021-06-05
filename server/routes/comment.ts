import express, { NextFunction, Request, Response } from "express";
import { Post, User, Comment, SubComment } from "../models";
const router = express.Router();

router.post(
  "/:postId",
  async (req: Request<{ postId: string }>, res: Response, next: NextFunction) => {
    try {
      if (req.params.postId) {
        const post = await Post.findOne({
          where: { id: req.params.postId },
        });
        if (!post) {
          return res.status(403).send("no exist post");
        }
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
      return next(error);
    }
  }
);

router.delete("/:CommentId", async (req: Request, res: Response, next: NextFunction) => {
  try {
    await Comment.destroy({
      where: { id: req.params.CommentId },
    });
    res.status(200).json({ CommentId: parseInt(req.params.CommentId, 10) });
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.post("/edit/:CommentId", async (req: Request, res: Response, next: NextFunction) => {
  try {
    await Comment.update(
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
    return next(error);
  }
});

router.patch(
  "/like/:UserId/:CommentId",
  async (
    req: Request<{ UserId: string; CommentId: string }>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      if (req.params.CommentId) {
        const comment = await Comment.findOne({ where: { id: req.params.CommentId } });
        if (!comment) {
          return res.status(403).send("no comment exist");
        }
        await comment.addCommentLikers([parseInt(req.params.UserId)]);
      }
      res.status(200).json({
        CommentId: req.params.CommentId,
        UserId: req.params.UserId,
      });
    } catch (error) {
      console.error(error);
      return next(error);
    }
  }
);

router.delete(
  "/unlike/:UserId/:CommentId",
  async (
    req: Request<{ UserId: string; CommentId: string }>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      if (req.params.CommentId) {
        const comment = await Comment.findOne({ where: { id: req.params.CommentId } });
        if (!comment) {
          return res.status(403).send("no comment exist");
        }
        await comment.removeCommentLikers([parseInt(req.params.UserId)]);
      }
      res.status(200).json({
        CommentId: parseInt(req.params.CommentId, 10),
        UserId: req.params.UserId,
      });
    } catch (error) {
      console.error(error);
      return next(error);
    }
  }
);

router.post(
  "/sub/:CommentId",
  async (req: Request<{ CommentId: string }>, res: Response, next: NextFunction) => {
    try {
      if (req.params.CommentId) {
        const comment = await Comment.findOne({
          where: { id: req.params.CommentId },
        });
        if (!comment) {
          return res.status(404).send("no exist post");
        }
      }
      const subComment = await SubComment.create({
        content: req.body.content,
        CommentId: parseInt(req.params.CommentId),
        UserId: req.body.UserId,
        PostId: req.body.PostId,
      });
      if (subComment.id) {
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
      }
    } catch (error) {
      console.error(error);
      return next(error);
    }
  }
);

router.delete(
  "/sub/:CommentId/:SubCommentId",
  async (req: Request, res: Response, next: NextFunction) => {
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
      return next(error);
    }
  }
);

router.post(
  "/sub/edit/:CommentId/:SubCommentId",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await SubComment.update(
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
      return next(error);
    }
  }
);

module.exports = router;
