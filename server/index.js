const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const db = require("./models");
const path = require("path");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const passportConfig = require("./passport");
const passport = require("passport");
const morgan = require("morgan");
const helmet = require("helmet");
const hpp = require("hpp");
const app = express();

app.disable("x-powered-by");

dotenv.config();

db.sequelize
  .sync()
  .then(() => {
    console.log("db connected");
  })
  .catch(console.error);
passportConfig();

app.set("trust proxy", 1);
if (process.env.NODE_ENV === "production") {
  app.use(morgan("combined"));
  app.use(hpp());
  app.use(helmet());
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
    name: process.env.COOKIE,
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE,
    proxy: process.env.NODE_ENV === "production",
    cookie: {
      // httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      domain: process.env.NODE_ENV === "production" && ".noahworld.site",
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("Noah world");
});

app.get("/api", (req, res) => {
  res.send("Noah world API");
});

app.use("/api/post", require("./routes/post"));
app.use("/api/user", require("./routes/user"));
app.use("/api/comment", require("./routes/comment"));
app.use("/api/search", require("./routes/search"));
app.use("/api/quiz", require("./routes/quiz"));

app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "https://noahworld.site" }),
  function (req, res) {
    res.redirect("https://noahworld.site");
  }
);

const port = 5000;

app.listen(port, () => {
  console.log(`Server Listening on ${port}`);
});
