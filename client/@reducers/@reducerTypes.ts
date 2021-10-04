export interface SearchPostInter {
  id: number;
  hit: number;
  category: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  UserId: number;
  Hashtags?: Array<HashtagsInter>;
}

export interface AsideHashtags {
  name: string;
  category: string;
}

export interface PostHashtagInter {
  createdAt: string;
  updatedAt: string;
  UserId: number;
  HashtagId: number;
}

export interface PostLikeInter {
  createdAt: string;
  updatedAt: string;
  UserId: number;
  PostId: number;
}

export interface HashtagsInter {
  name: string;
  PostHashtag?: PostHashtagInter;
}

export interface UserInfoInter {
  id: number;
  name: string;
  icon?: string;
}

export interface PostLikersInter {
  id: number;
  PostLikers: PostLikeInter;
}

export interface PostInter {
  id: number;
  hit: number;
  category: string;
  thumbnail?: string;
  title: string;
  content?: string;
  createdAt: string;
  updatedAt: string;
  UserId: number;
  User?: UserInfoInter;
  Hashtags?: Array<HashtagsInter>;
  PostLikers?: Array<PostLikersInter>;
  Comments?: Array<CommentsInter>;
}

export interface CommentsInter {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  UserId: number;
  PostId: number;
  User?: UserInfoInter;
  CommentLikers?: Array<CommentLikersInter>;
  SubComments?: Array<SubCommentsInter>;
}

export interface CommentLikersInter {
  id: number;
  CommentLike: CommentLikeInter;
}

export interface CommentLikeInter {
  createdAt: string;
  updatedAt: string;
  UserId: number;
  CommentId: number;
}

export interface SubCommentsInter {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  UserId: number;
  PostId: number;
  CommentId: number;
  User: UserInfoInter;
}

export interface RecentPostInter {
  id: number;
  category: string;
  title: string;
  Comments?: Array<CommentsInter>;
  hit?: number;
}

export interface UserInter {
  id: number;
  googleId: BigInt | null;
  email: string;
  name: string;
  icon: string;
  admin: number | null;
  createdAt: string;
  updatedAt: string;
  Comments: Array<CommentsInter>;
  Posts: Array<PostInter>;
  PostLiked: Array<PostLikersInter>;
}

export interface PostState {
  techPosts: Array<PostInter>;
  dailyPosts: Array<PostInter>;
  hashtags: Array<AsideHashtags>;
  post: PostInter | null;
  postPath: string | null;
  mostLikedPost: PostInter | null;
  mostViewedPost: PostInter | null;
  mostCommentedPost: PostInter | null;
  searchPosts: Array<SearchPostInter>;
  searchedKeyword: object | null;
  prevPost: Array<PostInter>;
  nextPost: Array<PostInter>;
  postCount: number;
  thumbnailPath: string | null;
  postImagePath: string | null;
  onEditPost: boolean;

  searchPostLoading: boolean;
  searchPostDone: boolean;
  searchPostError: boolean | Error;

  addPostLoading: Boolean;
  addPostDone: Boolean;
  addPostError: Boolean | Error;

  uploadThumbnailLoading: Boolean;
  uploadThumbnailDone: Boolean;
  uploadThumbnailError: Boolean | Error;

  uploadPostImageLoading: Boolean;
  uploadPostImageDone: Boolean;
  uploadPostImageError: Boolean | Error;

  removePostLoading: Boolean;
  removePostDone: Boolean;
  removePostError: Boolean | Error;

  editPostLoading: Boolean;
  editPostDone: Boolean;
  editPostError: Boolean | Error;

  loadPostLoading: Boolean;
  loadPostDone: Boolean;
  loadPostError: Boolean | Error;

  loadRecentPostsLoading: Boolean;
  loadRecentPostsDone: Boolean;
  loadRecentPostsError: Boolean | Error;

  loadPostsLoading: Boolean;
  loadPostsDone: Boolean;
  loadPostsError: Boolean | Error;

  loadCategoryPostsLoading: Boolean;
  loadCategoryPostsDone: Boolean;
  loadCategoryPostsError: Boolean | Error;

  loadMorePostsLoading: Boolean;
  loadMorePostsDone: Boolean;
  loadMorePostsError: Boolean | Error;

  likePostLoading: Boolean;
  likePostDone: Boolean;
  likePostError: Boolean | Error;

  unlikePostLoading: Boolean;
  unlikePostDone: Boolean;
  unlikePostError: Boolean | Error;

  addCommentLoading: Boolean;
  addCommentDone: Boolean;
  addCommentError: Boolean | Error;

  removeCommentLoading: Boolean;
  removeCommentDone: Boolean;
  removeCommentError: Boolean | Error;

  likeCommentLoading: Boolean;
  likeCommentDone: Boolean;
  likeCommentError: Boolean | Error;

  unlikeCommentLoading: Boolean;
  unlikeCommentDone: Boolean;
  unlikeCommentError: Boolean | Error;

  addSubCommentLoading: Boolean;
  addSubCommentDone: Boolean;
  addSubCommentError: Boolean | Error;

  removeSubCommentLoading: Boolean;
  removeSubCommentDone: Boolean;
  removeSubCommentError: Boolean | Error;

  hasMorePosts: Boolean;
}

export interface UserState {
  user: UserInter | null;
  imagePath: string | null;
  confirmPassword: Boolean;

  logInLoading: Boolean;
  logInDone: Boolean;
  logInError: Boolean | Error;

  logInGoogleLoading: Boolean;
  logInGoogleDone: Boolean;
  logInGoogleError: Boolean | Error;

  logOutLoading: Boolean;
  logOutDone: Boolean;
  logOutError: Boolean | Error;

  loadInfoLoading: Boolean;
  loadInfoDone: Boolean;
  loadInfoError: Boolean | Error;

  signUpLoading: Boolean;
  signUpDone: Boolean;
  signUpError: Boolean | Error;

  addIconLoading: Boolean;
  addIconDone: Boolean;
  addIconError: Boolean | Error;

  removeIconLoading: Boolean;
  removeIconDone: Boolean;
  removeIconError: Boolean | Error;

  confirmPasswordLoading: Boolean;
  confirmPasswordDone: Boolean;
  confirmPasswordError: Boolean | Error;

  withdrawalLoading: Boolean;
  withdrawalDone: Boolean;
  withdrawalError: Boolean | Error;

  changePasswordLoading: Boolean;
  changePasswordDone: Boolean;
  changePasswordError: Boolean | Error;

  changeNameLoading: Boolean;
  changeNameDone: Boolean;
  changeNameError: Boolean | Error;
}
