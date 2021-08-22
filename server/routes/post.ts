import express, { NextFunction, Request, Response } from "express";
import { Post, User, Hashtag, Comment, SubComment, Quiz } from "../models";
import multer from "multer";
import path from "path";
import { Op } from "sequelize";
import multerS3 from "multer-s3";
import AWS from "aws-sdk";

const router = express.Router();

AWS.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: "ap-northeast-2",
});

const upload = multer({
  storage: multerS3({
    s3: new AWS.S3(),
    bucket: "noah-world",
    key(req, file, cb) {
      cb(null, `original/${Date.now()}_${path.basename(file.originalname)}`);
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 },
});

router.post(
  "/uploadfiles",
  upload.single("image"),
  (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({
        success: true,
        url: res?.req?.file,
        fileName: (res?.req?.file as Express.MulterS3.File).location.replace(
          /\/original\//,
          "/thumb/"
        ),
      });
    } catch (error) {
      console.error(error);
      return next(error);
    }
  }
);

router.post(
  "/images",
  upload.single("image"),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json((req.file as Express.MulterS3.File).location.replace(/\/original\//, "/thumb/"));
    } catch (error) {
      console.error(error);
      return next(error);
    }
  }
);

router.post(
  "/image",
  upload.single("image"),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json((req.file as Express.MulterS3.File).location);
    } catch (error) {
      console.error(error);
      return next(error);
    }
  }
);

router.get("/class", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const classPosts_class = await Post.findAll({
      where: { category: "class" },
      order: [["createdAt", "ASC"]],
      include: [
        {
          model: Hashtag,
          attributes: ["name"],
        },
        {
          model: User,
          as: "PostLikers",
          attributes: ["id"],
        },
      ],
    });
    const culturePosts_class = await Post.findAll({
      where: { category: "culture" },
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: Hashtag,
          attributes: ["name"],
        },
        {
          model: User,
          as: "PostLikers",
          attributes: ["id"],
        },
      ],
    });
    const quizzes = await Quiz.findAll({
      where: { type: "quiz" },
      order: [["createdAt", "DESC"]],
    });
    const words = await Quiz.findAll({
      where: { type: "word" },
      order: [["createdAt", "DESC"]],
    });
    res.status(200).json({ classPosts_class, culturePosts_class, quizzes, words });
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.post("/recent", async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.body) {
      const recentViewPost = await Post.findOne({
        where: { id: req.body.recentView },
        attributes: ["id", "category", "title", "hit"],
      });

      const recentCommentPost = await Post.findOne({
        attributes: ["id", "category", "title"],
        where: { id: req.body.recentComment },
        include: [
          {
            model: Comment,
            order: [["createdAt", "DESC"]],
            where: { UserId: req.body.id },
            limit: 1,
          },
        ],
      });
      res.status(200).json({ recentViewPost, recentCommentPost });
    }
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.get("/category/:category", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const category = req.params.category;
    const posts = await Post.findAll({
      where: { category: req.params.category },
      order: [["createdAt", "DESC"]],
      limit: 7,
      include: [
        {
          model: Hashtag,
          attributes: ["name"],
        },
        {
          model: User,
          as: "PostLikers",
          attributes: ["id"],
        },
      ],
    });
    const countPosts = await Post.findAll({
      where: { category: req.params.category },
      attributes: ["id"],
    });
    res.status(200).json({ posts, category, countPosts });
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.get(
  "/onePost/:postId/:UserId/:category",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (req.params) {
        const post = await Post.findOne({
          where: { id: req.params.postId },
          include: [
            {
              model: User,
              attributes: ["id", "name"],
            },
            {
              model: Hashtag,
              attributes: ["name"],
            },
            {
              model: Comment,
              include: [
                {
                  model: User,
                  attributes: ["id", "name", "icon"],
                },
                {
                  model: User,
                  as: "CommentLikers",
                  attributes: ["id"],
                },
                {
                  model: SubComment,
                  include: [
                    {
                      model: User,
                      attributes: ["id", "name", "icon"],
                    },
                  ],
                },
              ],
            },
            {
              model: User,
              as: "PostLikers",
              attributes: ["id"],
            },
          ],
        });
        const prevPost = await Post.findAll({
          order: [["id", "DESC"]],
          where: { id: { [Op.lt]: req.params.postId }, category: req.params.category },
          attributes: ["id", "title", "createdAt", "category"],
          limit: 5,
        });
        const nextPost = await Post.findAll({
          where: { id: { [Op.gt]: req.params.postId }, category: req.params.category },
          attributes: ["id", "title", "createdAt", "category"],
          limit: 5,
        });
        await post?.increment("hit", { by: 1 });
        if (req.params.UserId) {
          User.update(
            {
              recentView: parseInt(req.params.postId, 10),
            },
            { where: { id: parseInt(req.params.UserId, 10) } }
          );
        }
        if (!post) {
          return res.status(404).send("Not Found, please check PostId TT");
        }
        res.status(200).json({ post, prevPost, nextPost });
      }
    } catch (error) {
      console.error(error);
      return next(error);
    }
  }
);

router.patch(
  "/like/:PostId/:UserId",
  async (
    req: Request<{ PostId: string; UserId: string }, any, any, any, any>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      if (req.params) {
        const post = await Post.findOne({ where: { id: req.params.PostId } });
        if (!post) {
          return res.status(403).send("no post exist");
        }
        await post.addPostLikers([parseInt(req.params.UserId)]);
        res.json({ PostId: post.id, UserId: parseInt(req.params.UserId) });
      }
    } catch (error) {
      console.error(error);
      return next(error);
    }
  }
);

router.delete(
  "/like/:PostId/:UserId",
  async (
    req: Request<{ PostId: string; UserId: string }, any, any, any, any>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const post = await Post.findOne({ where: { id: req.params.PostId } });
      if (!post) {
        return res.status(403).send("no post exist");
      }
      await post.removePostLikers([parseInt(req.params.UserId)]);
      res.json({ PostId: post.id, UserId: parseInt(req.params.UserId) });
    } catch (error) {
      console.error(error);
      return next(error);
    }
  }
);

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const techPosts = await Post.findAll({
      where: { category: "tech" },
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: Hashtag,
          attributes: ["name"],
        },
        {
          model: User,
          as: "PostLikers",
          attributes: ["id"],
        },
      ],
    });
    const dailyPosts = await Post.findAll({
      where: { category: "daily" },
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: Hashtag,
          attributes: ["name"],
        },
        {
          model: User,
          as: "PostLikers",
          attributes: ["id"],
        },
      ],
    });

    const hashtags = await Hashtag.findAll({
      attributes: ["name"],
    });

    const getAttributesFromPosts = await Post.findAll({
      order: [["createdAt", "DESC"]],
      attributes: ["id", "hit"],
      include: [
        {
          model: User,
          as: "PostLikers",
          attributes: ["id"],
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ["id"],
            },
          ],
        },
      ],
    }).then((result) =>
      result.map((post) => {
        //전체 포스트중 아이디,좋아요수,코멘트수,조회수를 배열형태로 가져옵니다.
        //배열사용이유 : sort 메쏘드를 이용하기 위해.
        return [post.id, post.PostLikers.length, post.Comments.length, post.hit];
      })
    );

    const mostCalculator = (i: number) => {
      if (getAttributesFromPosts.length > 0) {
        //느낌표를 사용한 이유 : 배열값이 하나라도 있으면 값 충족
        //예를들어 포스트가 달랑 하나더라도 top포스트 3부분에 전부 같은게시물이 올라감으로 충족합니다.
        return getAttributesFromPosts.sort((a, b) => b[i]! - a[i]!)[0][0];
      }
    };
    if (mostCalculator(1) && mostCalculator(2) && mostCalculator(3)) {
      const mostLikedPost = await Post.findOne({
        where: {
          id: mostCalculator(1),
        },
        attributes: {
          exclude: ["content"],
        },
        include: [
          {
            model: Hashtag,
            attributes: ["name"],
          },
          {
            model: User,
            as: "PostLikers",
            attributes: ["id"],
          },
        ],
      });
      const mostCommentedPost = await Post.findOne({
        where: {
          id: mostCalculator(2),
        },
        attributes: {
          exclude: ["content"],
        },
        include: [
          {
            model: Hashtag,
            attributes: ["name"],
          },
          {
            model: Comment,
            include: [
              {
                model: User,
                attributes: ["id"],
              },
            ],
          },
        ],
      });
      const mostViewedPost = await Post.findOne({
        where: {
          id: mostCalculator(3),
        },
        attributes: {
          exclude: ["content"],
        },
        include: [
          {
            model: Hashtag,
            attributes: ["name"],
          },
          {
            model: User,
            as: "PostLikers",
            attributes: ["id"],
          },
        ],
      });
      res.status(200).json({
        techPosts,
        dailyPosts,
        mostViewedPost,
        mostLikedPost,
        mostCommentedPost,
        hashtags,
      });
    }
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.get("/hashtag/:hashtag", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const posts = await Post.findAll({
      limit: 5,
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: Hashtag,
          where: { name: decodeURIComponent(req.params.hashtag) },
        },
      ],
    });
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (parseInt(req.body.UserId, 10) !== 1) {
      res.status(401).send("You are not a Admin");
      return;
    }
    if (req.body.password !== process.env.ADMIN_PASS) {
      res.status(401).send("Wrong Password");
      return;
    }
    const hashtags = await req.body.content
      .replace(/([:'\\\/#-=`\|~+%\^&;]#[^\s#+^<]+)/g, "")
      .replace(/(#youtube:[^\s#+^<]+)/g, "")
      .match(/(#[^\s#+^<]+)/g);
    const post = await Post.create({
      hit: 0,
      thumbnail: req.body.thumbnail,
      imagePath: req.body.imagePath,
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
      UserId: req.body.UserId,
    });
    if (hashtags) {
      const result = await Promise.all(
        hashtags.map((tag: string) =>
          Hashtag.findOrCreate({
            where: { name: tag.slice(1).toLowerCase() },
          })
        )
      );
      await post.addHashtags(result.map((v: any) => v[0]));
    }
    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.post("/edit", async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (parseInt(req.body.UserId, 10) !== 1) {
      res.status(401).send("You are not a Admin");
      return;
    }
    if (req.body.password !== process.env.ADMIN_PASS) {
      res.status(401).send("Wrong Password");
      return;
    }
    req.body.tags &&
      req.body.tags.map((v: { name: string }) => {
        Hashtag.destroy({
          where: { name: v.name },
        });
      });
    const hashtags = await req.body.content
      .replace(/([:'\\\/#-=`\|~+%\^&;]#[^\s#+^<]+)/g, "")
      .replace(/(#youtube:[^\s#+^<]+)/g, "")
      .replace(/(&.*;)/g, "")
      .match(/(#[^\s#+^<]+)/g);
    await Post.update(
      {
        thumbnail: req.body.thumbnail,
        imagePath: req.body.imagePath,
        title: req.body.title,
        content: req.body.content,
        UserId: req.body.UserId,
      },
      { where: { id: parseInt(req.body.PostId, 10) } }
    );
    if (req.body.PostId) {
      const prevPost = await Post.findOne({
        where: { id: req.body.PostId },
      });
      if (hashtags) {
        const result = await Promise.all(
          hashtags.map((tag: string) =>
            Hashtag.findOrCreate({
              where: { name: tag.slice(1).toLowerCase() },
            })
          )
        );
        prevPost?.addHashtags(result.map((v: any) => v[0]));
      }
    }
    res.status(201).send({ success: true });
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.post("/delete", async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.body.password !== process.env.ADMIN_PASS) {
      res.status(401).send("Wrong Password");
      return;
    }
    await SubComment.destroy({
      where: { PostId: req.body.PostId },
    });
    await Comment.destroy({
      where: { PostId: req.body.PostId },
    });
    await Post.destroy({
      where: { id: req.body.PostId },
    });
    if (req.body.tags) {
      req.body.tags.map((v: { name: string }) => {
        Hashtag.destroy({
          where: { name: v.name },
        });
      });
    }
    res.status(200).send({ success: true });
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.get("/morepost/:category", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const category = req.params.category;
    let where = {
      //Last ID 보다 낮은 즉, 이전게시물들을 찾습니다.
      [Op.and]: [{ id: { [Op.lt]: req.query.lastId } }, { category }],
    };
    const morePosts = await Post.findAll({
      //6개씩 불러오고 게시날짜를 내림차로 정렬합니다.
      where,
      limit: 6,
      order: [["createdAt", "DESC"]],
      include: [
        //해시태그, 좋아요한 유저를 받아옵니다.
        {
          model: Hashtag,
          attributes: ["name"],
        },
        {
          model: User,
          as: "PostLikers",
          attributes: ["id"],
        },
      ],
    });
    res.status(200).json({ morePosts, category });
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

module.exports = router;
