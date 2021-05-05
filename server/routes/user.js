const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");
const { Post, User, Image, Comment } = require("../models");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const saltRounds = 10;
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

router.post("/icon", upload.single("image"), async (req, res, next) => {
  User.update(
    { icon: req.file.location.replace(/\/original\//, "/thumb/") },
    { where: { id: req.body.id } }
  );
  res.json(req.file.location.replace(/\/original\//, "/thumb/"));
});

// const upload = multer({
//   storage: multer.diskStorage({
//     destination(req, file, done) {
//       done(null, "./server/uploads");
//     },
//     filename(req, file, done) {
//       const ext = path.extname(file.originalname);
//       const basename = path.basename(file.originalname, ext);
//       done(null, basename + "_icon_" + new Date().getTime() + ext);
//     },
//   }),
//   limits: { fileSize: 20 * 1024 * 1024 },
// });

// router.post("/icon", upload.single("image"), async (req, res, next) => {
//   const path = "http://localhost:5000/" + req.file.filename;
//   User.update({ icon: path }, { where: { id: req.body.id } });
//   res.json(path);
// });

router.post("/icon/url", async (req, res, next) => {
  User.update({ icon: req.body.url }, { where: { id: req.body.UserId } });
  res.json(req.body.url);
});

router.delete("/icon/:UserId", async (req, res, next) => {
  User.update(
    { icon: "/images/blog/default-user.png" },
    { where: { id: parseInt(req.params.UserId, 10) } }
  );
  res.send({ success: true });
});

router.get("/", async (req, res, next) => {
  try {
    if (req.user) {
      const fullUserWithoutPassword = await User.findOne({
        where: { id: parseInt(req.user.id, 10) },
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
    next(error);
  }
});

router.post("/logIn", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }
    return req.login(user, async (loginErr) => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
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
    });
  })(req, res, next);
});

router.post("/confirm", async (req, res, next) => {
  const myuser = await User.findOne({
    where: { id: parseInt(req.body.user.id, 10) },
  });
  const result = await bcrypt.compare(req.body.password, myuser.password);
  if (result) {
    res.status(200).send({ success: true });
  } else {
    res.status(401).send({ success: false, message: "wrong password" });
  }
});

router.post("/name", async (req, res, next) => {
  await User.update(
    { name: req.body.newName },
    {
      where: { id: parseInt(req.body.UserId, 10) },
    }
  );
  res.status(202).json({ newName: req.body.newName });
});

router.post("/password", async (req, res, next) => {
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
});

router.delete("/:UserId", async (req, res, next) => {
  const myuser = await User.destroy({
    where: { id: parseInt(req.params.UserId, 10) },
  });
  if (!myuser) {
    res.status(401).send("유저가 없는디용?");
  }
  res.status(200).send({ success: true });
});

router.post("/logOut", async (req, res, next) => {
  req.logout();
  req.session.destroy();
  res.send("log out done");
});

router.post("/signUp", async (req, res, next) => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const exUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (exUser) {
      return res
        .status(403)
        .send({ success: false, message: "Your E-mail is already used, please Check one`s again" });
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
    next(error);
  }
});

module.exports = router;
