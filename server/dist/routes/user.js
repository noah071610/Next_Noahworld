"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const passport_1 = __importDefault(require("passport"));
const models_1 = require("../models");
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const multer_s3_1 = __importDefault(require("multer-s3"));
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const saltRounds = 10;
const router = express_1.default.Router();
aws_sdk_1.default.config.update({
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    region: "ap-northeast-2",
});
const upload = multer_1.default({
    storage: multer_s3_1.default({
        // AWS.S3에 이미지를 저장하는 과정입니다.
        s3: new aws_sdk_1.default.S3(),
        bucket: "noahworld",
        key(req, file, cb) {
            cb(null, `original/${Date.now()}_${path_1.default.basename(file.originalname)}`);
        },
    }),
    limits: { fileSize: 20 * 1024 * 1024 },
});
router.post("/icon", upload.single("image"), async (req, res, next) => {
    //유저가 file을 업로드하는 방식으로 아이콘을 업데이트한 경우
    try {
        models_1.User.update({ icon: req.file.location.replace(/\/original\//, "/thumb/") }, { where: { id: req.body.id } });
        res.json(req.file.location.replace(/\/original\//, "/thumb/"));
    }
    catch (error) {
        console.error(error);
        return next(error);
    }
});
router.delete("/icon/:UserId", async (req, res, next) => {
    //유저가 아이콘을 삭제하는경우, 미리 저장되어있는 default 값으로 변경합니다.
    try {
        models_1.User.update({ icon: "/images/blog/default-user.png" }, { where: { id: parseInt(req.params.UserId, 10) } });
        res.send({ success: true });
    }
    catch (error) {
        console.error(error);
        return next(error);
    }
});
router.get("/", async (req, res, next) => {
    try {
        if (req.user) {
            const fullUserWithoutPassword = await models_1.User.findOne({
                where: { id: req.user.id },
                attributes: {
                    exclude: ["password"],
                },
                include: [
                    {
                        model: models_1.Comment,
                    },
                    {
                        model: models_1.Post,
                    },
                    {
                        model: models_1.Post,
                        as: "PostLiked",
                        attributes: ["id"],
                    },
                ],
            });
            res.status(200).json(fullUserWithoutPassword);
        }
        else {
            res.status(200).json(req.body.id);
        }
    }
    catch (error) {
        console.error(error);
        return next(error);
    }
});
router.post("/logIn", (req, res, next) => {
    passport_1.default.authenticate("local", (err, user, info) => {
        if (err) {
            console.error(err);
            return next(err);
        }
        if (info) {
            return res.status(401).send(info.message);
        }
        return req.login(user, async (loginErr) => {
            try {
                if (loginErr) {
                    return next(loginErr);
                }
                if (user) {
                    const fullUserWithoutPassword = await models_1.User.findOne({
                        where: { id: user.id },
                        attributes: {
                            exclude: ["password"],
                        },
                        include: [
                            {
                                model: models_1.Comment,
                            },
                            {
                                model: models_1.Post,
                            },
                            {
                                model: models_1.Post,
                                as: "PostLiked",
                                attributes: ["id"],
                            },
                        ],
                    });
                    return res.status(200).json(fullUserWithoutPassword);
                }
            }
            catch (error) {
                console.error(error);
                return next(error);
            }
        });
    })(req, res, next);
});
router.post("/confirm", async (req, res, next) => {
    try {
        if (req.body.user.id) {
            const myuser = await models_1.User.findOne({
                where: { id: parseInt(req.body.user.id, 10) },
            });
            if (myuser) {
                const result = await bcrypt_1.default.compare(req.body.password, myuser.password);
                if (result) {
                    res.status(200).send({ success: true });
                }
                else {
                    res.status(401).send({ success: false, message: "wrong password" });
                }
            }
        }
    }
    catch (error) {
        console.error(error);
        return next(error);
    }
});
router.post("/name", async (req, res, next) => {
    try {
        await models_1.User.update({ name: req.body.newName }, {
            where: { id: parseInt(req.body.UserId, 10) },
        });
        res.status(202).json({ newName: req.body.newName });
    }
    catch (error) {
        console.error(error);
        return next(error);
    }
});
router.post("/password", async (req, res, next) => {
    try {
        const salt = await bcrypt_1.default.genSalt(saltRounds);
        const mynewPassword = await bcrypt_1.default.hash(req.body.newPassword, salt);
        await models_1.User.update({
            password: mynewPassword,
        }, {
            where: { id: parseInt(req.body.user.id, 10) },
        });
        res.status(200).send({ success: true });
    }
    catch (error) {
        console.error(error);
        return next(error);
    }
});
router.delete("/:UserId", async (req, res, next) => {
    try {
        const myuser = await models_1.User.destroy({
            where: { id: parseInt(req.params.UserId, 10) },
        });
        if (!myuser) {
            res.status(401).send("유저가 없는디용?");
        }
        res.status(200).send({ success: true });
    }
    catch (error) {
        console.error(error);
        return next(error);
    }
});
router.post("/logOut", async (req, res, next) => {
    try {
        req.logout();
        req.session.destroy(() => {
            res.send("log out done");
        });
    }
    catch (error) {
        console.error(error);
        return next(error);
    }
});
router.post("/signUp", async (req, res, next) => {
    try {
        const salt = await bcrypt_1.default.genSalt(saltRounds);
        if (req.body.email) {
            const exUser = await models_1.User.findOne({
                where: {
                    email: req.body.email,
                },
            });
            if (exUser) {
                return res.status(403).send({
                    success: false,
                    message: "Your E-mail is already used, please Check one`s again",
                });
            }
        }
        if (req.body.password.length > 9) {
            return res
                .status(403)
                .send({ success: false, message: "Password have to be longer then 9 letters" });
        }
        const hashedPassword = await bcrypt_1.default.hash(req.body.password, salt);
        await models_1.User.create({
            email: req.body.email,
            name: req.body.name,
            password: hashedPassword,
            icon: req.body.icon ? req.body.icon : "/images/blog/default-user.png",
        });
        res.status(200).send({ success: true, message: "Save your ID well! Let`s Login :)" });
    }
    catch (error) {
        console.error(error);
        return next(error);
    }
});
module.exports = router;
