import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { sequelize } from "./models";
import path from "path";
import session from "express-session";
import cookieParser from "cookie-parser";
import passportConfig from "./passport";
import passport from "passport";
import morgan from "morgan";
import helmet from "helmet";
import hpp from "hpp";

const app = express();
const prod: boolean = process.env.NODE_ENV === "production";
const port = 5000;

app.disable("x-powered-by");

dotenv.config();

sequelize
  .sync()
  .then(() => {
    console.log("db connected");
  })
  .catch((err: Error) => {
    console.error(err);
  });

passportConfig();

if (prod) {
  app.enable("trust proxy");
  app.use(morgan("combined"));
  app.use(hpp());
  app.use(helmet({ contentSecurityPolicy: false }));
  app.use(
    cors({
      origin: "https://noahworld.site",
      credentials: true,
    })
  );
  console.log("production on");
} else {
  app.use(morgan("dev"));
  app.use(
    cors({
      origin: true,
      credentials: true,
    })
  );
  console.log("production off");
}

app.use("/", express.static(path.join(__dirname, "uploads")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE));
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE!,
    proxy: prod ? true : false,
    cookie: {
      httpOnly: true,
      secure: prod ? true : false,
      domain: prod ? ".noahworld.site" : undefined,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req: Request, res: Response) => {
  res.send("Noah world");
});

app.get("/api", (req: Request, res: Response) => {
  res.send("Noah world API");
});

app.use("/api/post", require("./routes/post"));
app.use("/api/user", require("./routes/user"));
app.use("/api/comment", require("./routes/comment"));

app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "https://noahworld.site" }),
  function (req: Request, res: Response) {
    res.redirect("https://noahworld.site");
  }
);

app.listen(port, () => {
  console.log(`Server Listening on ${port}`);
});
