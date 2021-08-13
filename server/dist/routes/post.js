"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const models_1 = require("../models");
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const sequelize_1 = require("sequelize");
const multer_s3_1 = __importDefault(require("multer-s3"));
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const router = express_1.default.Router();
aws_sdk_1.default.config.update({
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    region: "ap-northeast-2",
});
const upload = multer_1.default({
    storage: multer_s3_1.default({
        s3: new aws_sdk_1.default.S3(),
        bucket: "noahworld",
        key(req, file, cb) {
            cb(null, `original/${Date.now()}_${path_1.default.basename(file.originalname)}`);
        },
    }),
    limits: { fileSize: 20 * 1024 * 1024 },
});
router.post("/uploadfiles", upload.single("image"), (req, res, next) => {
    try {
        res.json({
            success: true,
            url: res.req.file.path,
            fileName: res.req.file.location.replace(/\/original\//, "/thumb/"),
        });
    }
    catch (error) {
        console.error(error);
        return next(error);
    }
});
router.post("/images", upload.single("image"), async (req, res, next) => {
    try {
        res.json(req.file.location.replace(/\/original\//, "/thumb/"));
    }
    catch (error) {
        console.error(error);
        return next(error);
    }
});
router.post("/image", upload.single("image"), async (req, res, next) => {
    try {
        res.json(req.file.location);
    }
    catch (error) {
        console.error(error);
        return next(error);
    }
});
router.get("/class", async (req, res, next) => {
    try {
        const classPosts_class = await models_1.Post.findAll({
            where: { category: "class" },
            order: [["createdAt", "ASC"]],
            include: [
                {
                    model: models_1.Hashtag,
                    attributes: ["name"],
                },
                {
                    model: models_1.User,
                    as: "PostLikers",
                    attributes: ["id"],
                },
            ],
        });
        const culturePosts_class = await models_1.Post.findAll({
            where: { category: "culture" },
            order: [["createdAt", "DESC"]],
            include: [
                {
                    model: models_1.Hashtag,
                    attributes: ["name"],
                },
                {
                    model: models_1.User,
                    as: "PostLikers",
                    attributes: ["id"],
                },
            ],
        });
        const quizzes = await models_1.Quiz.findAll({
            where: { type: "quiz" },
            order: [["createdAt", "DESC"]],
        });
        const words = await models_1.Quiz.findAll({
            where: { type: "word" },
            order: [["createdAt", "DESC"]],
        });
        res.status(200).json({ classPosts_class, culturePosts_class, quizzes, words });
    }
    catch (error) {
        console.error(error);
        return next(error);
    }
});
router.post("/recent", async (req, res, next) => {
    try {
        if (req.body) {
            const recentViewPost = await models_1.Post.findOne({
                where: { id: req.body.recentView },
                attributes: ["id", "category", "title", "hit"],
            });
            const recentCommentPost = await models_1.Post.findOne({
                attributes: ["id", "category", "title"],
                where: { id: req.body.recentComment },
                include: [
                    {
                        model: models_1.Comment,
                        order: [["createdAt", "DESC"]],
                        where: { UserId: req.body.id },
                        limit: 1,
                    },
                ],
            });
            res.status(200).json({ recentViewPost, recentCommentPost });
        }
    }
    catch (error) {
        console.error(error);
        return next(error);
    }
});
router.get("/category/:category", async (req, res, next) => {
    try {
        const category = req.params.category;
        const posts = await models_1.Post.findAll({
            where: { category: req.params.category },
            order: [["createdAt", "DESC"]],
            limit: 7,
            include: [
                {
                    model: models_1.Hashtag,
                    attributes: ["name"],
                },
                {
                    model: models_1.User,
                    as: "PostLikers",
                    attributes: ["id"],
                },
            ],
        });
        const countPosts = await models_1.Post.findAll({
            where: { category: req.params.category },
            attributes: ["id"],
        });
        res.status(200).json({ posts, category, countPosts });
    }
    catch (error) {
        console.error(error);
        return next(error);
    }
});
router.get("/onePost/:postId/:UserId/:category", async (req, res, next) => {
    try {
        if (req.params) {
            const post = await models_1.Post.findOne({
                where: { id: req.params.postId },
                include: [
                    {
                        model: models_1.User,
                        attributes: ["id", "name"],
                    },
                    {
                        model: models_1.Hashtag,
                        attributes: ["name"],
                    },
                    {
                        model: models_1.Comment,
                        include: [
                            {
                                model: models_1.User,
                                attributes: ["id", "name", "icon"],
                            },
                            {
                                model: models_1.User,
                                as: "CommentLikers",
                                attributes: ["id"],
                            },
                            {
                                model: models_1.SubComment,
                                include: [
                                    {
                                        model: models_1.User,
                                        attributes: ["id", "name", "icon"],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        model: models_1.User,
                        as: "PostLikers",
                        attributes: ["id"],
                    },
                ],
            });
            const prevPost = await models_1.Post.findAll({
                order: [["id", "DESC"]],
                where: { id: { [sequelize_1.Op.lt]: req.params.postId }, category: req.params.category },
                attributes: ["id", "title", "createdAt", "category"],
                limit: 5,
            });
            const nextPost = await models_1.Post.findAll({
                where: { id: { [sequelize_1.Op.gt]: req.params.postId }, category: req.params.category },
                attributes: ["id", "title", "createdAt", "category"],
                limit: 5,
            });
            await post?.increment("hit", { by: 1 });
            if (req.params.UserId) {
                models_1.User.update({
                    recentView: parseInt(req.params.postId, 10),
                }, { where: { id: parseInt(req.params.UserId, 10) } });
            }
            if (!post) {
                return res.status(404).send("Not Found, please check PostId TT");
            }
            res.status(200).json({ post, prevPost, nextPost });
        }
    }
    catch (error) {
        console.error(error);
        return next(error);
    }
});
router.patch("/like/:PostId/:UserId", async (req, res, next) => {
    try {
        if (req.params) {
            const post = await models_1.Post.findOne({ where: { id: req.params.PostId } });
            if (!post) {
                return res.status(403).send("no post exist");
            }
            await post.addPostLikers([parseInt(req.params.UserId)]);
            res.json({ PostId: post.id, UserId: parseInt(req.params.UserId) });
        }
    }
    catch (error) {
        console.error(error);
        return next(error);
    }
});
router.delete("/like/:PostId/:UserId", async (req, res, next) => {
    try {
        const post = await models_1.Post.findOne({ where: { id: req.params.PostId } });
        if (!post) {
            return res.status(403).send("no post exist");
        }
        await post.removePostLikers([parseInt(req.params.UserId)]);
        res.json({ PostId: post.id, UserId: parseInt(req.params.UserId) });
    }
    catch (error) {
        console.error(error);
        return next(error);
    }
});
router.get("/", async (req, res, next) => {
    try {
        const techPosts = await models_1.Post.findAll({
            where: { category: "tech" },
            order: [["createdAt", "DESC"]],
            include: [
                {
                    model: models_1.Hashtag,
                    attributes: ["name"],
                },
                {
                    model: models_1.User,
                    as: "PostLikers",
                    attributes: ["id"],
                },
            ],
        });
        const dailyPosts = await models_1.Post.findAll({
            where: { category: "daily" },
            order: [["createdAt", "DESC"]],
            include: [
                {
                    model: models_1.Hashtag,
                    attributes: ["name"],
                },
                {
                    model: models_1.User,
                    as: "PostLikers",
                    attributes: ["id"],
                },
            ],
        });
        const hashtags = await models_1.Hashtag.findAll({
            attributes: ["name"],
        });
        const getAttributesFromPosts = await models_1.Post.findAll({
            order: [["createdAt", "DESC"]],
            attributes: ["id", "hit"],
            include: [
                {
                    model: models_1.User,
                    as: "PostLikers",
                    attributes: ["id"],
                },
                {
                    model: models_1.Comment,
                    include: [
                        {
                            model: models_1.User,
                            attributes: ["id"],
                        },
                    ],
                },
            ],
        }).then((result) => result.map((post) => {
            //전체 포스트중 아이디,좋아요수,코멘트수,조회수를 배열형태로 가져옵니다.
            //배열사용이유 : sort 메쏘드를 이용하기 위해.
            return [post.id, post.PostLikers.length, post.Comments.length, post.hit];
        }));
        const mostCalculator = (i) => {
            if (getAttributesFromPosts.length > 0) {
                //느낌표를 사용한 이유 : 배열값이 하나라도 있으면 값 충족
                //예를들어 포스트가 달랑 하나더라도 top포스트 3부분에 전부 같은게시물이 올라감으로 충족합니다.
                return getAttributesFromPosts.sort((a, b) => b[i] - a[i])[0][0];
            }
        };
        if (mostCalculator(1) && mostCalculator(2) && mostCalculator(3)) {
            const mostLikedPost = await models_1.Post.findOne({
                where: {
                    id: mostCalculator(1),
                },
                attributes: {
                    exclude: ["content"],
                },
                include: [
                    {
                        model: models_1.Hashtag,
                        attributes: ["name"],
                    },
                    {
                        model: models_1.User,
                        as: "PostLikers",
                        attributes: ["id"],
                    },
                ],
            });
            const mostCommentedPost = await models_1.Post.findOne({
                where: {
                    id: mostCalculator(2),
                },
                attributes: {
                    exclude: ["content"],
                },
                include: [
                    {
                        model: models_1.Hashtag,
                        attributes: ["name"],
                    },
                    {
                        model: models_1.Comment,
                        include: [
                            {
                                model: models_1.User,
                                attributes: ["id"],
                            },
                        ],
                    },
                ],
            });
            const mostViewedPost = await models_1.Post.findOne({
                where: {
                    id: mostCalculator(3),
                },
                attributes: {
                    exclude: ["content"],
                },
                include: [
                    {
                        model: models_1.Hashtag,
                        attributes: ["name"],
                    },
                    {
                        model: models_1.User,
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
    }
    catch (error) {
        console.error(error);
        return next(error);
    }
});
router.get("/hashtag/:hashtag", async (req, res, next) => {
    try {
        const posts = await models_1.Post.findAll({
            limit: 5,
            order: [["createdAt", "DESC"]],
            include: [
                {
                    model: models_1.Hashtag,
                    where: { name: decodeURIComponent(req.params.hashtag) },
                },
            ],
        });
        res.status(200).json(posts);
    }
    catch (error) {
        console.error(error);
        return next(error);
    }
});
router.post("/", async (req, res, next) => {
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
        const post = await models_1.Post.create({
            hit: 0,
            thumbnail: req.body.thumbnail,
            imagePath: req.body.imagePath,
            title: req.body.title,
            content: req.body.content,
            category: req.body.category,
            UserId: req.body.UserId,
        });
        if (hashtags) {
            const result = await Promise.all(hashtags.map((tag) => models_1.Hashtag.findOrCreate({
                where: { name: tag.slice(1).toLowerCase() },
            })));
            await post.addHashtags(result.map((v) => v[0]));
        }
        res.status(201).json(post);
    }
    catch (error) {
        console.error(error);
        return next(error);
    }
});
router.post("/edit", async (req, res, next) => {
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
                models_1.Hashtag.destroy({
                    where: { name: v.name },
                });
            });
        const hashtags = await req.body.content
            .replace(/([:'\\\/#-=`\|~+%\^&;]#[^\s#+^<]+)/g, "")
            .replace(/(#youtube:[^\s#+^<]+)/g, "")
            .replace(/(&.*;)/g, "")
            .match(/(#[^\s#+^<]+)/g);
        await models_1.Post.update({
            thumbnail: req.body.thumbnail,
            imagePath: req.body.imagePath,
            title: req.body.title,
            content: req.body.content,
            UserId: req.body.UserId,
        }, { where: { id: parseInt(req.body.PostId, 10) } });
        if (req.body.PostId) {
            const prevPost = await models_1.Post.findOne({
                where: { id: req.body.PostId },
            });
            if (hashtags) {
                const result = await Promise.all(hashtags.map((tag) => models_1.Hashtag.findOrCreate({
                    where: { name: tag.slice(1).toLowerCase() },
                })));
                prevPost?.addHashtags(result.map((v) => v[0]));
            }
        }
        res.status(201).send({ success: true });
    }
    catch (error) {
        console.error(error);
        return next(error);
    }
});
router.post("/delete", async (req, res, next) => {
    try {
        if (req.body.password !== process.env.ADMIN_PASS) {
            res.status(401).send("Wrong Password");
            return;
        }
        await models_1.SubComment.destroy({
            where: { PostId: req.body.PostId },
        });
        await models_1.Comment.destroy({
            where: { PostId: req.body.PostId },
        });
        await models_1.Post.destroy({
            where: { id: req.body.PostId },
        });
        if (req.body.tags) {
            req.body.tags.map((v) => {
                models_1.Hashtag.destroy({
                    where: { name: v.name },
                });
            });
        }
        res.status(200).send({ success: true });
    }
    catch (error) {
        console.error(error);
        return next(error);
    }
});
router.get("/morepost/:category", async (req, res, next) => {
    try {
        const category = req.params.category;
        let where = {
            //Last ID 보다 낮은 즉, 이전게시물들을 찾습니다.
            [sequelize_1.Op.and]: [{ id: { [sequelize_1.Op.lt]: req.query.lastId } }, { category }],
        };
        const morePosts = await models_1.Post.findAll({
            //6개씩 불러오고 게시날짜를 내림차로 정렬합니다.
            where,
            limit: 6,
            order: [["createdAt", "DESC"]],
            include: [
                //해시태그, 좋아요한 유저를 받아옵니다.
                {
                    model: models_1.Hashtag,
                    attributes: ["name"],
                },
                {
                    model: models_1.User,
                    as: "PostLikers",
                    attributes: ["id"],
                },
            ],
        });
        res.status(200).json({ morePosts, category });
    }
    catch (error) {
        console.error(error);
        return next(error);
    }
});
module.exports = router;
