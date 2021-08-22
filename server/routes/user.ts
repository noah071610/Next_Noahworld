import express, { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import passport from "passport";
import { Post, User, Comment } from "../models";
import multer from "multer";
import path from "path";
import multerS3 from "multer-s3";
import AWS from "aws-sdk";

const saltRounds = 10;
const router = express.Router();

AWS.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: "ap-northeast-2",
});

const upload = multer({
  storage: multerS3({
    // AWS.S3에 이미지를 저장하는 과정입니다.
    s3: new AWS.S3(),
    bucket: "noah-world",
    key(req: Request, file: Express.Multer.File, cb) {
      cb(null, `original/${Date.now()}_${path.basename(file.originalname)}`);
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 },
});

router.post(
  "/icon",
  upload.single("image"),
  async (req: Request, res: Response, next: NextFunction) => {
    //유저가 file을 업로드하는 방식으로 아이콘을 업데이트한 경우
    try {
      User.update(
        { icon: (req.file as Express.MulterS3.File).location.replace(/\/original\//, "/thumb/") },
        { where: { id: req.body.id } }
      );
      res.json((req.file as Express.MulterS3.File).location.replace(/\/original\//, "/thumb/"));
    } catch (error) {
      console.error(error);
      return next(error);
    }
  }
);

router.delete("/icon/:UserId", async (req: Request, res: Response, next: NextFunction) => {
  //유저가 아이콘을 삭제하는경우, 미리 저장되어있는 default 값으로 변경합니다.
  try {
    User.update(
      { icon: "/images/blog/default-user.png" },
      { where: { id: parseInt(req.params.UserId, 10) } }
    );
    res.send({ success: true });
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.user) {
      const fullUserWithoutPassword = await User.findOne({
        where: { id: req.user.id },
        attributes: {
          exclude: ["password"],
        },
        include: [
          {
            model: Comment,
          },
          {
            model: Post,
          },
          {
            model: Post,
            as: "PostLiked",
            attributes: ["id"],
          },
        ],
      });
      res.status(200).json(fullUserWithoutPassword);
    } else {
      res.status(200).json(req.body.id);
    }
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.post("/logIn", (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate("local", (err: Error, user: User, info: { message: string }) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.message);
    }
    return req.login(user, async (loginErr: Error) => {
      try {
        if (loginErr) {
          return next(loginErr);
        }
        if (user.id) {
          const fullUserWithoutPassword = await User.findOne({
            where: { id: user.id },
            attributes: {
              exclude: ["password"],
            },
            include: [
              {
                model: Comment,
              },
              {
                model: Post,
              },
              {
                model: Post,
                as: "PostLiked",
                attributes: ["id"],
              },
            ],
          });
          return res.status(200).json(fullUserWithoutPassword);
        }
      } catch (error) {
        console.error(error);
        return next(error);
      }
    });
  })(req, res, next);
});

router.post("/confirm", async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.body.user.id) {
      const myuser = await User.findOne({
        where: { id: parseInt(req.body.user.id, 10) },
      });
      if (myuser) {
        const result = await bcrypt.compare(req.body.password, myuser.password!);
        if (result) {
          res.status(200).send({ success: true });
        } else {
          res.status(401).send({ success: false, message: "wrong password" });
        }
      }
    }
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.post("/name", async (req: Request, res: Response, next: NextFunction) => {
  try {
    await User.update(
      { name: req.body.newName },
      {
        where: { id: parseInt(req.body.UserId, 10) },
      }
    );
    res.status(202).json({ newName: req.body.newName });
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.post("/password", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const mynewPassword = await bcrypt.hash(req.body.newPassword, salt);
    await User.update(
      {
        password: mynewPassword,
      },
      {
        where: { id: parseInt(req.body.user.id, 10) },
      }
    );
    res.status(200).send({ success: true });
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.delete("/:UserId", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const myuser = await User.destroy({
      where: { id: parseInt(req.params.UserId, 10) },
    });
    if (!myuser) {
      res.status(401).send("유저가 없는디용?");
    }
    res.status(200).send({ success: true });
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.post("/logOut", async (req: Request, res: Response, next: NextFunction) => {
  try {
    req.logout();
    req.session.destroy(() => {
      res.send("log out done");
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.post("/signUp", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    if (req.body.email) {
      const exUser = await User.findOne({
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
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    await User.create({
      email: req.body.email,
      name: req.body.name,
      password: hashedPassword,
      icon: req.body.icon ? req.body.icon : "/images/blog/default-user.png",
    });
    res.status(200).send({ success: true, message: "Save your ID well! Let`s Login :)" });
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

module.exports = router;
