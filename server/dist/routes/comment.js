"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const models_1 = require("../models");
const router = express_1.default.Router();
router.post("/:postId", async (req, res, next) => {
    try {
        if (req.params.postId) {
            const post = await models_1.Post.findOne({
                where: { id: req.params.postId },
            });
            if (!post) {
                return res.status(403).send("no exist post");
            }
        }
        const comment = await models_1.Comment.create({
            content: req.body.content,
            PostId: parseInt(req.params.postId),
            UserId: req.body.userId,
        });
        const fullComment = await models_1.Comment.findOne({
            where: { id: comment.id },
            include: [
                {
                    model: models_1.User,
                    attributes: ["id", "name", "icon"],
                },
            ],
        });
        models_1.User.update({
            recentComment: parseInt(req.params.postId, 10),
        }, { where: { id: parseInt(req.body.userId, 10) } });
        res.status(201).json(fullComment);
    }
    catch (error) {
        console.error(error);
        return next(error);
    }
});
router.delete("/:CommentId", async (req, res, next) => {
    try {
        await models_1.Comment.destroy({
            where: { id: req.params.CommentId },
        });
        res.status(200).json({ CommentId: parseInt(req.params.CommentId, 10) });
    }
    catch (error) {
        console.error(error);
        return next(error);
    }
});
router.post("/edit/:CommentId", async (req, res, next) => {
    try {
        await models_1.Comment.update({
            content: req.body.content,
        }, { where: { id: req.params.CommentId } });
        res
            .status(201)
            .json({ CommentId: parseInt(req.params.CommentId, 10), newComment: req.body.content });
    }
    catch (error) {
        console.error(error);
        return next(error);
    }
});
router.patch("/like/:UserId/:CommentId", async (req, res, next) => {
    try {
        if (req.params.CommentId) {
            const comment = await models_1.Comment.findOne({ where: { id: req.params.CommentId } });
            if (!comment) {
                return res.status(403).send("no comment exist");
            }
            await comment.addCommentLikers([parseInt(req.params.UserId)]);
            res.status(200).json({
                CommentId: parseInt(req.params.CommentId, 10),
                UserId: parseInt(req.params.UserId, 10),
            });
        }
    }
    catch (error) {
        console.error(error);
        return next(error);
    }
});
router.delete("/unlike/:UserId/:CommentId", async (req, res, next) => {
    try {
        if (req.params.CommentId) {
            const comment = await models_1.Comment.findOne({ where: { id: req.params.CommentId } });
            if (!comment) {
                return res.status(403).send("no comment exist");
            }
            await comment.removeCommentLikers([parseInt(req.params.UserId)]);
            res.status(200).json({
                CommentId: parseInt(req.params.CommentId, 10),
                UserId: parseInt(req.params.UserId, 10),
            });
        }
    }
    catch (error) {
        console.error(error);
        return next(error);
    }
});
router.post("/sub/:CommentId", async (req, res, next) => {
    try {
        if (req.params.CommentId) {
            const comment = await models_1.Comment.findOne({
                where: { id: req.params.CommentId },
            });
            if (!comment) {
                return res.status(404).send("no exist post");
            }
        }
        const subComment = await models_1.SubComment.create({
            content: req.body.content,
            CommentId: parseInt(req.params.CommentId),
            UserId: req.body.UserId,
            PostId: req.body.PostId,
        });
        if (subComment.id) {
            const fullSubComment = await models_1.SubComment.findOne({
                where: { id: subComment.id },
                include: [
                    {
                        model: models_1.User,
                        attributes: ["id", "name", "icon"],
                    },
                ],
            });
            res.status(201).json({ fullSubComment, CommentId: parseInt(req.params.CommentId, 10) });
        }
    }
    catch (error) {
        console.error(error);
        return next(error);
    }
});
router.delete("/sub/:CommentId/:SubCommentId", async (req, res, next) => {
    try {
        if (req.params.SubCommentId) {
            await models_1.SubComment.destroy({
                where: { id: req.params.SubCommentId },
            });
            res.status(200).json({
                CommentId: parseInt(req.params.CommentId, 10),
                SubCommentId: parseInt(req.params.SubCommentId, 10),
            });
        }
    }
    catch (error) {
        console.error(error);
        return next(error);
    }
});
router.post("/sub/edit/:CommentId/:SubCommentId", async (req, res, next) => {
    try {
        await models_1.SubComment.update({
            content: req.body.content,
        }, { where: { id: req.params.SubCommentId } });
        res.status(201).json({
            CommentId: parseInt(req.params.CommentId, 10),
            content: req.body.content,
            SubCommentId: parseInt(req.params.SubCommentId, 10),
        });
    }
    catch (error) {
        console.error(error);
        return next(error);
    }
});
module.exports = router;
