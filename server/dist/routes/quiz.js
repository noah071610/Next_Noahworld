"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const models_1 = require("../models");
const router = express_1.default.Router();
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
        await models_1.Quiz.create({
            type: req.body.type,
            question: req.body.question,
            answer: req.body.answer,
            UserId: 1,
        });
        res.status(201).send("add Success");
    }
    catch (error) {
        console.error(error);
        return next(error);
    }
});
module.exports = router;
