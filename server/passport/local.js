const passport = require("passport");
const { Strategy: LocalStrategy } = require("passport-local");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const bcrypt = require("bcrypt");
const { User } = require("../models");

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (email, password, done) => {
        try {
          const user = await User.findOne({
            where: { email },
          });
          if (!user) {
            return done(null, false, { reason: "Login Error : Uncorrect ID" });
          }
          if (user.googleId) {
            return done(null, false, {
              reason: "Login Error : You're google user!! Please use Google login.",
            });
          }
          if (!password) {
            return done(null, false, { reason: "Login Error : No password inputed" });
          }
          const result = await bcrypt.compare(password, user.password);
          if (result) {
            return done(null, user);
          }
          return done(null, false, { reason: "Login Error : Uncorrect password" });
        } catch (error) {
          console.log(error);
          return done(error);
        }
      }
    )
  );
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "https://api.noahworld.site/auth/google/callback",
      },
      async (accessToken, refreshToken, profile, cb) => {
        const user = await User.findOne({ where: { email: profile.emails[0].value } });
        if (user) {
          return cb(null, user);
        } else {
          const newUser = await User.create({
            googleId: profile.id,
            email: profile.emails[0].value,
            name: profile.displayName,
            icon: profile.photos[0].value,
          });
          return cb(null, newUser);
        }
      }
    )
  );
};
