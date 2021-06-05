import express, { NextFunction, Request, Response } from "express";
import { Post, Hashtag } from "../models";
import { Op } from "sequelize";

const router = express.Router();

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
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
    return next(error);
  }
});

router.post("/hashtag", async (req: Request, res: Response, next: NextFunction) => {
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
    return next(error);
  }
});

module.exports = router;
