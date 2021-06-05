import express, { NextFunction, Request, Response } from "express";
import { Quiz } from "../models";

const router = express.Router();

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
    await Quiz.create({
      type: req.body.type,
      question: req.body.question,
      answer: req.body.answer,
      UserId: 1,
    });
    res.status(201).send("add Success");
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

module.exports = router;
