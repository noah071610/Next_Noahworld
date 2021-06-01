const express = require("express");
const bcrypt = require("bcrypt");
const app = express();
const { Post, User, Image, Hashtag, Comment, PostLike, SubComment, Quiz } = require("../models");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { Op } = require("sequelize");
const multerS3 = require("multer-s3");
const AWS = require("aws-sdk");

AWS.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: "ap-northeast-2",
});

const upload = multer({
  storage: multerS3({
    s3: new AWS.S3(),
    bucket: "noahworld",
    key(req, file, cb) {
      cb(null, `original/${Date.now()}_${path.basename(file.originalname)}`);
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 },
});

router.post("/uploadfiles", upload.any, (req, res) => {
  res.json({
    success: true,
    url: res.req.file.path,
    fileName: res.req.file.location.replace(/\/original\//, "/thumb/"),
  });
});

router.post("/images", upload.single("image"), async (req, res, next) => {
  res.json(req.file.location.replace(/\/original\//, "/thumb/"));
});

router.post("/image", upload.single("image"), async (req, res, next) => {
  res.json(req.file.location);
});

router.get("/class", async (req, res) => {
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
  }
});

router.post("/recent", async (req, res) => {
  try {
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
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/category/:category", async (req, res) => {
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
      attributes: [("COUNT", "id")],
    });
    res.status(200).json({ posts, category, countPosts });
  } catch (error) {
    console.error(error);
  }
});

router.get("/onePost/:postId/:UserId/:category", async (req, res) => {
  try {
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
    await post.increment("hit", { by: 1 });
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
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.patch("/like/:PostId/:UserId", async (req, res, next) => {
  try {
    const post = await Post.findOne({ where: { id: req.params.PostId } });
    if (!post) {
      return res.status(403).send("no post exist");
    }
    await post.addPostLikers(req.params.UserId);
    res.json({ PostId: post.id, UserId: req.params.UserId });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete("/like/:PostId/:UserId", async (req, res, next) => {
  try {
    const post = await Post.findOne({ where: { id: req.params.PostId } });
    if (!post) {
      return res.status(403).send("no post exist");
    }
    await post.removePostLikers(req.params.UserId);
    res.json({ PostId: post.id, UserId: req.params.UserId });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/", async (req, res) => {
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
      result.map((v) => {
        //전체 포스트중 아이디,좋아요수,코멘트수,조회수 전체를 배열형태로 가져옵니다.
        return [v.id, v.PostLikers.length, v.Comments.length, v.hit];
      })
    );
    // 가져온 값을 원하는 값에 따라 미리 분류해둡니다.
    const getLikes = await getAttributesFromPosts.map((v, i) => {
      return v[1];
    });
    const getComments = await getAttributesFromPosts.map((v, i) => {
      return v[2];
    });
    const getViews = await getAttributesFromPosts.map((v, i) => {
      return v[3];
    });

    const mostCalculator = (arr, index) =>
      getAttributesFromPosts.find((v) => {
        //배열중 최대값을 구하기 위해 아래의 값을 사용했습니다.
        return v[index] === Math.max.apply(null, arr);
      });

    //결과값이 이중배열으로 이루어진 id값으로 나오기때문에 [0][0]을 붙혔습니다.
    const mostLikedId = await mostCalculator(getLikes, 1)[0];
    const mostCommentsId = await mostCalculator(getComments, 2)[0];
    const mostViewedId = await mostCalculator(getViews, 3)[0];

    //원하는 값이 최대인 게시글에 아이디를 이용해서 DB안에 값을 찾아줍니다.
    const mostLikedPost = await Post.findOne({
      where: {
        id: mostLikedId,
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
        id: mostCommentsId,
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
        id: mostViewedId,
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
    //메인페이지에 따로 표시할 해시태그도 잊지않고 가져옵니다.
    const hashtags = await Hashtag.findAll({
      attributes: ["name"],
    });
    res.status(200).json({
      techPosts,
      dailyPosts,
      mostViewedPost,
      mostLikedPost,
      mostCommentedPost,
      hashtags,
    });
  } catch (error) {
    console.error(error);
  }
});

router.get("/hashtag/:hashtag", async (req, res, next) => {
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
  }
});

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
        hashtags.map((tag) =>
          Hashtag.findOrCreate({
            where: { name: tag.slice(1).toLowerCase() },
          })
        )
      );
      await post.addHashtags(result.map((v) => v[0]));
    }
    res.status(201).json(post);
  } catch (error) {
    console.error(error);
  }
});

router.post("/edit", async (req, res) => {
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
      req.body.tags.map((v) => {
        Hashtag.destroy({
          where: { name: v.name },
        });
      });
    const hashtags = await req.body.content
      .replace(/([:'\\\/#-=`\|~+%\^&;]#[^\s#+^<]+)/g, "")
      .replace(/(#youtube:[^\s#+^<]+)/g, "")
      .replace(/(&.*;)/g, "")
      .match(/(#[^\s#+^<]+)/g);
    const newPost = await Post.update(
      {
        thumbnail: req.body.thumbnail,
        imagePath: req.body.imagePath,
        title: req.body.title,
        content: req.body.content,
        UserId: req.body.UserId,
      },
      { where: { id: parseInt(req.body.PostId, 10) } }
    );
    if (hashtags) {
      const result = await Promise.all(
        hashtags.map((tag) =>
          Hashtag.findOrCreate({
            where: { name: tag.slice(1).toLowerCase() },
          })
        )
      );
      const prevPost = await Post.findOne({
        where: { id: req.body.PostId },
      });
      await prevPost.addHashtags(result.map((v) => v[0]));
    }
    res.status(201).send({ success: true });
  } catch (error) {
    console.error(error);
  }
});

router.post("/delete", async (req, res, next) => {
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
      req.body.tags.map((v) => {
        Hashtag.destroy({
          where: { name: v.name },
        });
      });
    }
    res.status(200).send({ success: true });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/morepost/:category", async (req, res) => {
  try {
    const category = req.params.category;
    let where = {
      //Last ID 보다 낮은 즉, 이전게시물들을 찾는다.
      [Op.and]: [{ id: { [Op.lt]: parseInt(req.query.lastId, 10) } }, { category }],
    };
    const morePosts = await Post.findAll({
      //6개씩 불러오고 게시날짜를 내림차로 정렬
      where,
      limit: 6,
      order: [["createdAt", "DESC"]],
      include: [
        //해시태그, 좋아요한 유저를 받아온다.
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
  }
});

module.exports = router;
