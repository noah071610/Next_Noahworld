import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import bcrypt from "bcrypt";
import User from "../models/user";

export default () => {
  passport.use(
    "local",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (email, password, done) => {
        try {
          if (email) {
            const user = await User.findOne({
              where: { email },
            });
            if (!user) {
              return done(null, false, { message: "Login Error : Email doesn't exist." });
            }
            if (user.googleId) {
              return done(null, false, {
                message: "Login Error : You're google user. Please use Google login.",
              });
            }
            if (!user.password) {
              return done(null, false, { message: "Login Error : No password inputed." });
            }
            const result = await bcrypt.compare(password, user.password);
            if (result) {
              return done(null, user);
            } else {
              return done(null, false, { message: "Login Error : Uncorrect Password." });
            }
          } else {
            return done(null, false, { message: "Login Error : Email doesn't exist." });
          }
        } catch (error) {
          console.log(error);
          return done(error);
        }
      }
    )
  );
  passport.use(
    "google",
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        callbackURL: "https://api.noahworld.site/auth/google/callback",
      },
      async (accessToken, refreshToken, profile, cb) => {
        try {
          if (profile.emails && profile.photos) {
            const user = await User.findOne({ where: { email: profile.emails[0].value } });
            if (user) {
              return cb(null, user);
            } else {
              if (profile.id && profile.displayName) {
                const newUser = await User.create({
                  googleId: profile.id,
                  email: profile.emails[0].value,
                  name: profile.displayName,
                  icon: profile.photos[0].value,
                });
                return cb(null, newUser);
              }
            }
          }
        } catch (error) {
          console.log(error);
          return cb(error as any);
        }
      }
    )
  );
};
