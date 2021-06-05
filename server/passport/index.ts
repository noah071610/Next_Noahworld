import passport from "passport";
import local from "./local";
import User from "../models/user";

export default () => {
  passport.serializeUser((user: User, done) => {
    done(null, user.id);
  });
  passport.deserializeUser(async (id: number, done) => {
    try {
      const user = await User.findOne({
        where: { id },
      });
      done(null, user);
    } catch (error) {
      console.log(error);
      return done(error);
    }
  });
  local();
};
