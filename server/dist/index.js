"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const models_1 = require("./models");
const path_1 = __importDefault(require("path"));
const express_session_1 = __importDefault(require("express-session"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const passport_1 = __importDefault(require("./passport"));
const passport_2 = __importDefault(require("passport"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const hpp_1 = __importDefault(require("hpp"));
const app = express_1.default();
const prod = process.env.NODE_ENV === "production";
const port = 5000;
app.disable("x-powered-by");
dotenv_1.default.config();
models_1.sequelize
    .sync()
    .then(() => {
    console.log("db connected");
})
    .catch((err) => {
    console.error(err);
});
passport_1.default();
if (prod) {
    app.enable("trust proxy");
    app.use(morgan_1.default("combined"));
    app.use(hpp_1.default());
    app.use(helmet_1.default({ contentSecurityPolicy: false }));
    app.use(cors_1.default({
        origin: "https://noahworld.site",
        credentials: true,
    }));
    console.log("production on");
}
else {
    app.use(morgan_1.default("dev"));
    app.use(cors_1.default({
        origin: true,
        credentials: true,
    }));
    console.log("production off");
}
app.use("/", express_1.default.static(path_1.default.join(__dirname, "uploads")));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(cookie_parser_1.default(process.env.COOKIE));
app.use(express_session_1.default({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE,
    proxy: prod,
    cookie: {
        httpOnly: true,
        secure: false,
        domain: prod ? ".noahworld.site" : undefined,
    },
}));
app.use(passport_2.default.initialize());
app.use(passport_2.default.session());
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
app.get("/auth/google", passport_2.default.authenticate("google", { scope: ["profile", "email"] }));
app.get("/auth/google/callback", passport_2.default.authenticate("google", { failureRedirect: "https://noahworld.site" }), function (req, res) {
    res.redirect("https://noahworld.site");
});
app.listen(port, () => {
    console.log(`Server Listening on ${port}`);
});
