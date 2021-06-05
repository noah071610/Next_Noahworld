import User, { associate as associateUser } from "./user";
import Post, { associate as associatePost } from "./post";
import Comment, { associate as associateComment } from "./comment";
import SubComment, { associate as associateSubComment } from "./subcomment";
import Quiz, { associate as associateQuiz } from "./quiz";
import Image, { associate as associateImage } from "./image";
import Hashtag, { associate as associateHashtag } from "./hashtag";
export * from "./sequelize";

export { User };
export { Post };
export { Comment };
export { SubComment };
export { Quiz };
export { Image };
export { Hashtag };

const db = {
  User,
  Post,
  Comment,
  SubComment,
  Quiz,
  Image,
  Hashtag,
};

export type dbType = typeof db;

associateUser(db);
associateComment(db);
associateHashtag(db);
associateImage(db);
associatePost(db);
associateQuiz(db);
associateSubComment(db);
