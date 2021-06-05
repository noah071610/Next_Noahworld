"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const local_1 = __importDefault(require("./local"));
const user_1 = __importDefault(require("../models/user"));
exports.default = () => {
    passport_1.default.serializeUser((user, done) => {
        return done(null, user.id);
    });
    passport_1.default.deserializeUser(async (id, done) => {
        try {
            if (id) {
                const user = await user_1.default.findOne({
                    where: { id },
                });
                return done(null, user);
            }
        }
        catch (error) {
            console.log(error);
            return done(error);
        }
    });
    local_1.default();
};
