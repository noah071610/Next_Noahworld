"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const models_1 = require("../models");
const sequelize_1 = require("sequelize");
const router = express_1.default.Router();
router.post("/", async (req, res, next) => {
    try {
        const searchPosts = await models_1.Post.findAll({
            where: {
                [sequelize_1.Op.or]: [
                    { title: { [sequelize_1.Op.like]: `%${req.body.keyword}%` } },
                    { content: { [sequelize_1.Op.like]: `%${req.body.keyword}%` } },
                ],
            },
            attributes: {
                exclude: ["thumbnail", "imagePath"],
            },
        });
        res.status(200).json({ searchPosts, searchedKeyword: req.body.keyword });
    }
    catch (error) {
        console.error(error);
        return next(error);
    }
});
router.post("/hashtag", async (req, res, next) => {
    try {
        const hashtagPosts = await models_1.Post.findAll({
            attributes: {
                exclude: ["thumbnail", "imagePath"],
            },
            include: [
                {
                    model: models_1.Hashtag,
                    attributes: ["name"],
                    where: { name: { [sequelize_1.Op.eq]: req.body.tag } },
                },
            ],
        });
        res.status(200).json({ hashtagPosts });
    }
    catch (error) {
        console.error(error);
        return next(error);
    }
});
module.exports = router;
