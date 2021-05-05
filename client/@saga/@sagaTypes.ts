import {
  EDIT_POST_REQUEST,
  LIKE_POST_REQUEST,
  LOAD_CATEGORY_POSTS_REQUEST,
  LOAD_MORE_POSTS_REQUEST,
  LOAD_POST_REQUEST,
  LOAD_RECENT_POSTS_REQUEST,
  REMOVE_POST_REQUEST,
  UNLIKE_POST_REQUEST,
  UPLOAD_IMAGES_REQUEST,
  UPLOAD_POST_IMAGE_REQUEST,
} from "../@reducers/post";
import {
  ADD_ICON_REQUEST,
  CHANGE_NAME_REQUEST,
  CHANGE_PASSWORD_REQUEST,
  CONFIRM_PASSWORD_REQUEST,
  LOG_IN_REQUEST,
  REMOVE_ICON_REQUEST,
  SIGN_UP_REQUEST,
  WITHDRWAL_REQUEST,
} from "../@reducers/user";
import {
  ADD_QUIZ_REQUEST,
  SEARCH_HASH_TAG_REQUEST,
  SEARCH_KEYWORD_REQUEST,
} from "../@reducers/blog";
import { UserInter, HashtagsInter } from "../@reducers/@reducerTypes";
import {
  ADD_COMMENT_REQUEST,
  ADD_POST_REQUEST,
  ADD_SUB_COMMENT_REQUEST,
  EDIT_COMMENT_REQUEST,
  EDIT_SUB_COMMENT_REQUEST,
  LIKE_COMMENT_REQUEST,
  REMOVE_COMMENT_REQUEST,
  REMOVE_SUB_COMMENT_REQUEST,
  UNLIKE_COMMENT_REQUEST,
} from "../@reducers/post";

export interface AddQuizInter {
  type: typeof ADD_QUIZ_REQUEST;
  data: AddQuizData;
}

export interface AddQuizData {
  type: "word" | "quiz";
  question: string;
  answer: string;
  password: string;
  UserId: number;
}

export interface SearchKeywordInter {
  type: typeof SEARCH_KEYWORD_REQUEST;
  data: SearchKeywordData;
}

export interface SearchKeywordData {
  keyword: string;
}

export interface SearchHashtagInter {
  type: typeof SEARCH_HASH_TAG_REQUEST;
  data: SearchHashtagData;
}

export interface SearchHashtagData {
  tag: string;
}

export interface UserData {
  email: string;
  password: string;
  name?: string;
}

export interface LogInInter {
  type: typeof LOG_IN_REQUEST;
  data: UserData;
}

export interface SignUpInter {
  type: typeof SIGN_UP_REQUEST;
  data: UserData;
}

export interface AddIconData {
  form: FormData;
}

export interface AddIconInter {
  type: typeof ADD_ICON_REQUEST;
  data: AddIconData;
}

export interface RemoveIconInter {
  type: typeof REMOVE_ICON_REQUEST;
  data: number;
}

export interface ComfirmPasswordData {
  password: string;
  user: UserInter;
}

export interface ComfirmPasswordInter {
  type: typeof CONFIRM_PASSWORD_REQUEST;
  data: ComfirmPasswordData;
}

export interface ChangePasswordData {
  newPassword: string;
  user: UserInter;
}

export interface ChangePasswordInter {
  type: typeof CHANGE_PASSWORD_REQUEST;
  data: ChangePasswordData;
}

export interface ChangeNameData {
  newName: string;
  UserId: number;
}

export interface ChangeNameInter {
  type: typeof CHANGE_NAME_REQUEST;
  data: ChangeNameData;
}

export interface WithdrwalInter {
  type: typeof WITHDRWAL_REQUEST;
  data: number;
}

export interface AddCommentData {
  content: string;
  postId: number;
  userId: number;
}

export interface AddCommentInter {
  type: typeof ADD_COMMENT_REQUEST;
  data: AddCommentData;
}

export interface RemoveCommentInter {
  type: typeof REMOVE_COMMENT_REQUEST;
  data: number;
}

export interface EditCommentData {
  content: string;
  CommentId: number;
}

export interface EditCommentInter {
  type: typeof EDIT_COMMENT_REQUEST;
  data: EditCommentData;
}

export interface LikeCommentData {
  UserId: number;
  CommentId: number;
}

export interface LikeCommentInter {
  type: typeof LIKE_COMMENT_REQUEST;
  data: LikeCommentData;
}

export interface UnlikeCommentInter {
  type: typeof UNLIKE_COMMENT_REQUEST;
  data: LikeCommentData;
}

export interface AddSubCommentData {
  content: string;
  PostId: number;
  CommentId: number;
  UserId: number;
}

export interface AddSubCommentInter {
  type: typeof ADD_SUB_COMMENT_REQUEST;
  data: AddSubCommentData;
}

export interface SubCommentData {
  content?: string;
  CommentId: number;
  SubCommentId: number;
}

export interface RemoveSubCommentInter {
  type: typeof REMOVE_SUB_COMMENT_REQUEST;
  data: SubCommentData;
}

export interface EditSubCommentInter {
  type: typeof EDIT_SUB_COMMENT_REQUEST;
  data: SubCommentData;
}

//======================= Post ============================

export interface UploadImageData {
  imageFormData: FormData;
}

export interface UploadImageInter {
  type: typeof UPLOAD_IMAGES_REQUEST;
  data: UploadImageData;
}

export interface UploadPostImageInter {
  type: typeof UPLOAD_POST_IMAGE_REQUEST;
  data: UploadImageData;
}

export interface NewPostData {
  thumbnail?: string;
  title: string;
  imagePath?: string;
  category: string;
  content: string;
  UserId: number;
  password: string;
  PostId: number;
  tags: HashtagsInter[];
}

export interface AddPostInter {
  type: typeof ADD_POST_REQUEST;
  data: NewPostData;
}

export interface EditPostInter {
  type: typeof EDIT_POST_REQUEST;
  data: NewPostData;
}

export interface LoadCategoryInter {
  type: typeof LOAD_CATEGORY_POSTS_REQUEST;
  data: string;
}

export interface LoadMorePostsData {
  LastId: number;
  category: string;
}

export interface LoadMorePostsInter {
  type: typeof LOAD_MORE_POSTS_REQUEST;
  data: LoadMorePostsData;
}

export interface LoadMorePostsData {
  LastId: number;
  category: string;
}

export interface LoadMorePostsInter {
  type: typeof LOAD_MORE_POSTS_REQUEST;
  data: LoadMorePostsData;
}

export interface LikePostData {
  PostId: number;
  UserId: number;
}

export interface LikePostInter {
  type: typeof LIKE_POST_REQUEST;
  data: LikePostData;
}

export interface UnlikePostInter {
  type: typeof UNLIKE_POST_REQUEST;
  data: LikePostData;
}

export interface RemovePostData {
  PostId: number;
  password: string;
  tags: HashtagsInter;
}

export interface RemovePostInter {
  type: typeof REMOVE_POST_REQUEST;
  data: RemovePostData;
}

export interface LoadRecentPostInter {
  type: typeof LOAD_RECENT_POSTS_REQUEST;
  data: UserInter;
}

export interface LoadPostData {
  postId: number;
  UserId: number;
  category: string;
}

export interface LoadPostInter {
  type: typeof LOAD_POST_REQUEST;
  data: LoadPostData;
}
