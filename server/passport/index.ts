import passport from "passport";
import local from "./local";
import User from "../models/user";

export default () => {
  passport.serializeUser((user: User, done) => {
    return done(null, user.id);
  });
  passport.deserializeUser(async (id: number, done) => {
    try {
      if (id) {
        const user = await User.findOne({
          where: { id },
        });
        return done(null, user);
      }
    } catch (error) {
      console.log(error);
      return done(error);
    }
  });
  local();
};
