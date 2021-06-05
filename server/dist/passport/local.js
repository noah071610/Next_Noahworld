"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = require("passport-local");
const passport_google_oauth20_1 = require("passport-google-oauth20");
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = __importDefault(require("../models/user"));
exports.default = () => {
    passport_1.default.use("local", new passport_local_1.Strategy({
        usernameField: "email",
        passwordField: "password",
    }, async (email, password, done) => {
        try {
            const user = await user_1.default.findOne({
                where: { email },
            });
            if (!user) {
                return done(null, false, { message: "Login Error : Uncorrect password" });
            }
            if (user?.googleId) {
                return done(null, false, {
                    message: "Login Error : You're google user!! Please use Google login.",
                });
            }
            if (!user?.password) {
                return done(null, false, { message: "Login Error : No password inputed" });
            }
            const result = await bcrypt_1.default.compare(password, user.password);
            if (result) {
                return done(null, user);
            }
        }
        catch (error) {
            console.log(error);
            return done(error);
        }
    }));
    passport_1.default.use("google", new passport_google_oauth20_1.Strategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "https://api.noahworld.site/auth/google/callback",
    }, async (accessToken, refreshToken, profile, cb) => {
        if (!profile?.emails || !profile.photos) {
            return;
        }
        const user = await user_1.default.findOne({ where: { email: profile.emails[0].value } });
        if (user) {
            return cb(null, user);
        }
        else {
            const newUser = await user_1.default.create({
                googleId: profile.id,
                email: profile.emails[0].value,
                name: profile.displayName,
                icon: profile.photos[0].value,
            });
            return cb(null, newUser);
        }
    }));
};
