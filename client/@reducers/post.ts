import produce from "immer";
import { CommentsInter, PostState } from "./@reducerTypes";

const initialState = {
  post: null,
  postPath: null,
  techPosts: [],
  dailyPosts: [],
  hashtags: [],
  prevPost: [],
  nextPost: [],
  postCount: 0,
  searchPosts: [],
  mostLikedPost: null,
  mostViewedPost: null,
  mostCommentedPost: null,
  thumbnailPath: null,
  postImagePath: null,
  onEditPost: false,

  searchedKeyword: null,
  searchPostLoading: false,
  searchPostDone: false,
  searchPostError: false,

  addPostLoading: false,
  addPostDone: false,
  addPostError: false,

  uploadThumbnailLoading: false,
  uploadThumbnailDone: false,
  uploadThumbnailError: false,

  uploadPostImageLoading: false,
  uploadPostImageDone: false,
  uploadPostImageError: false,

  removePostLoading: false,
  removePostDone: false,
  removePostError: false,

  editPostLoading: false,
  editPostDone: false,
  editPostError: false,

  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: false,

  loadRecentPostsLoading: false,
  loadRecentPostsDone: false,
  loadRecentPostsError: false,

  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: false,

  loadCategoryPostsLoading: false,
  loadCategoryPostsDone: false,
  loadCategoryPostsError: false,

  loadMorePostsLoading: false,
  loadMorePostsDone: false,
  loadMorePostsError: false,

  likePostLoading: false,
  likePostDone: false,
  likePostError: false,

  unlikePostLoading: false,
  unlikePostDone: false,
  unlikePostError: false,

  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: false,

  removeCommentLoading: false,
  removeCommentDone: false,
  removeCommentError: false,

  likeCommentLoading: false,
  likeCommentDone: false,
  likeCommentError: false,

  unlikeCommentLoading: false,
  unlikeCommentDone: false,
  unlikeCommentError: false,

  addSubCommentLoading: false,
  addSubCommentDone: false,
  addSubCommentError: false,

  removeSubCommentLoading: false,
  removeSubCommentDone: false,
  removeSubCommentError: false,

  hasMorePosts: false,
};

export const UPLOAD_THUMBNAIL_REQUEST = "UPLOAD_THUMBNAIL_REQUEST" as const;
export const UPLOAD_THUMBNAIL_SUCCESS = "UPLOAD_THUMBNAIL_SUCCESS" as const;
export const UPLOAD_THUMBNAIL_FAILURE = "UPLOAD_THUMBNAIL_FAILURE" as const;
export const UPLOAD_THUMBNAIL_CLEAR = "UPLOAD_THUMBNAIL_CLEAR" as const;

export const UPLOAD_POST_IMAGE_REQUEST = "UPLOAD_POST_IMAGE_REQUEST" as const;
export const UPLOAD_POST_IMAGE_SUCCESS = "UPLOAD_POST_IMAGE_SUCCESS" as const;
export const UPLOAD_POST_IMAGE_FAILURE = "UPLOAD_POST_IMAGE_FAILURE" as const;
export const UPLOAD_POST_IMAGE_CLEAR = "UPLOAD_POST_IMAGE_CLEAR" as const;

export const ADD_POST_REQUEST = "ADD_POST_REQUEST" as const;
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS" as const;
export const ADD_POST_FAILURE = "ADD_POST_FAILURE" as const;
export const ADD_POST_CLEAR = "ADD_POST_CLEAR" as const;

export const LOAD_POST_REQUEST = "LOAD_POST_REQUEST" as const;
export const LOAD_POST_SUCCESS = "LOAD_POST_SUCCESS" as const;
export const LOAD_POST_FAILURE = "LOAD_POST_FAILURE" as const;

export const LOAD_SIDE_POST_REQUEST = "LOAD_SIDE_POST_REQUEST" as const;
export const LOAD_SIDE_POST_SUCCESS = "LOAD_SIDE_POST_SUCCESS" as const;
export const LOAD_SIDE_POST_FAILURE = "LOAD_SIDE_POST_FAILURE" as const;

export const LOAD_POSTS_REQUEST = "LOAD_POSTS_REQUEST" as const;
export const LOAD_POSTS_SUCCESS = "LOAD_POSTS_SUCCESS" as const;
export const LOAD_POSTS_FAILURE = "LOAD_POSTS_FAILURE" as const;

export const SEARCH_POST_REQUEST = "SEARCH_POST_REQUEST" as const;
export const SEARCH_POST_SUCCESS = "SEARCH_POST_SUCCESS" as const;
export const SEARCH_POST_FAILURE = "SEARCH_POST_FAILURE" as const;
export const SEARCH_POST_CLEAR = "SEARCH_POST_CLEAR" as const;

export const LOAD_CATEGORY_POSTS_REQUEST = "LOAD_CATEGORY_POSTS_REQUEST" as const;
export const LOAD_CATEGORY_POSTS_SUCCESS = "LOAD_CATEGORY_POSTS_SUCCESS" as const;
export const LOAD_CATEGORY_POSTS_FAILURE = "LOAD_CATEGORY_POSTS_FAILURE" as const;

export const LOAD_MORE_POSTS_REQUEST = "LOAD_MORE_POSTS_REQUEST" as const;
export const LOAD_MORE_POSTS_SUCCESS = "LOAD_MORE_POSTS_SUCCESS" as const;
export const LOAD_MORE_POSTS_FAILURE = "LOAD_MORE_POSTS_FAILURE" as const;

export const EDIT_POST_REQUEST = "EDIT_POST_REQUEST" as const;
export const EDIT_POST_SUCCESS = "EDIT_POST_SUCCESS" as const;
export const EDIT_POST_FAILURE = "EDIT_POST_FAILURE" as const;
export const EDIT_POST_CLEAR = "EDIT_POST_CLEAR" as const;

export const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST" as const;
export const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS" as const;
export const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE" as const;
export const REMOVE_POST_CLEAR = "REMOVE_POST_CLEAR" as const;

export const LIKE_POST_REQUEST = "LIKE_POST_REQUEST" as const;
export const LIKE_POST_SUCCESS = "LIKE_POST_SUCCESS" as const;
export const LIKE_POST_FAILURE = "LIKE_POST_FAILURE" as const;

export const UNLIKE_POST_REQUEST = "UNLIKE_POST_REQUEST" as const;
export const UNLIKE_POST_SUCCESS = "UNLIKE_POST_SUCCESS" as const;
export const UNLIKE_POST_FAILURE = "UNLIKE_POST_FAILURE" as const;

export const LIKE_COMMENT_REQUEST = "LIKE_COMMENT_REQUEST" as const;
export const LIKE_COMMENT_SUCCESS = "LIKE_COMMENT_SUCCESS" as const;
export const LIKE_COMMENT_FAILURE = "LIKE_COMMENT_FAILURE" as const;

export const UNLIKE_COMMENT_REQUEST = "UNLIKE_COMMENT_REQUEST" as const;
export const UNLIKE_COMMENT_SUCCESS = "UNLIKE_COMMENT_SUCCESS" as const;
export const UNLIKE_COMMENT_FAILURE = "UNLIKE_COMMENT_FAILURE" as const;

export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST" as const;
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS" as const;
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE" as const;
export const ADD_COMMENT_CLEAR = "ADD_COMMENT_CLEAR" as const;

export const REMOVE_COMMENT_REQUEST = "REMOVE_COMMENT_REQUEST" as const;
export const REMOVE_COMMENT_SUCCESS = "REMOVE_COMMENT_SUCCESS" as const;
export const REMOVE_COMMENT_FAILURE = "REMOVE_COMMENT_FAILURE" as const;

export const ADD_SUB_COMMENT_REQUEST = "ADD_SUB_COMMENT_REQUEST" as const;
export const ADD_SUB_COMMENT_SUCCESS = "ADD_SUB_COMMENT_SUCCESS" as const;
export const ADD_SUB_COMMENT_FAILURE = "ADD_SUB_COMMENT_FAILURE" as const;
export const ADD_SUB_COMMENT_CLEAR = "ADD_SUB_COMMENT_CLEAR" as const;

export const REMOVE_SUB_COMMENT_REQUEST = "REMOVE_SUB_COMMENT_REQUEST" as const;
export const REMOVE_SUB_COMMENT_SUCCESS = "REMOVE_SUB_COMMENT_SUCCESS" as const;
export const REMOVE_SUB_COMMENT_FAILURE = "REMOVE_SUB_COMMENT_FAILURE" as const;

export const SET_POST_EDIT = "SET_POST_EDIT" as const;

const reducer = (state: PostState = initialState, action: any) =>
  produce(state, (draft: any) => {
    switch (action.type) {
      case SET_POST_EDIT:
        draft.onEditPost = action.data;
        break;
      case SEARCH_POST_REQUEST:
        draft.searchPostLoading = true;
        draft.searchPostDone = false;
        draft.searchPostError = false;
        break;
      case SEARCH_POST_SUCCESS: {
        draft.searchPosts = action.data.searchPosts;
        draft.searchPostLoading = false;
        draft.searchPostDone = true;
        draft.searchedKeyword = action.data.searchedKeyword;
        break;
      }
      case SEARCH_POST_FAILURE:
        draft.searchPostLoading = false;
        draft.searchPostError = action.error;
        break;
      case SEARCH_POST_CLEAR:
        draft.searchPostLoading = false;
        draft.searchPostDone = false;
        draft.searchPostError = false;
        break;
      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostError = false;
        draft.addPostDone = false;
        break;
      case ADD_POST_SUCCESS:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        if (action.data.category === "tech") {
          draft.techPosts.unshift(action.data);
          draft.postPath = `${action.data.category}/post/${action.data.id}`;
        } else {
          draft.dailyPosts.unshift(action.data);
          draft.postPath = `${action.data.category}/post/${action.data.id}`;
        }
        break;
      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;
      case ADD_POST_CLEAR:
        draft.addPostDone = false;
        draft.addPostError = false;
        break;
      case LOAD_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = false;
        break;
      case LOAD_POSTS_SUCCESS:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.techPosts = action.data.techPosts;
        draft.dailyPosts = action.data.dailyPosts;
        draft.hashtags = action.data.hashtags;
        draft.mostViewedPost = action.data.mostViewedPost || null;
        draft.mostLikedPost = action.data.mostLikedPost || null;
        draft.mostCommentedPost = action.data.mostCommentedPost || null;
        break;
      case LOAD_POSTS_FAILURE:
        draft.loadPostLoading = false;
        draft.loadPostError = action.error;
        break;
      case LOAD_POST_REQUEST:
        draft.loadPostLoading = true;
        draft.loadPostDone = false;
        draft.loadPostError = false;
        break;
      case LOAD_POST_SUCCESS:
        draft.loadPostLoading = false;
        draft.loadPostDone = true;
        draft.post = action.data.post;
        break;
      case LOAD_POST_FAILURE:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;
      case LOAD_SIDE_POST_REQUEST:
        draft.loadSidePostLoading = true;
        draft.loadSidePostDone = false;
        draft.loadSidePostError = false;
        break;
      case LOAD_SIDE_POST_SUCCESS:
        draft.loadSidePostLoading = false;
        draft.loadSidePostDone = true;
        draft.prevPost = action.data.prevPost;
        draft.nextPost = action.data.nextPost;
        break;
      case LOAD_SIDE_POST_FAILURE:
        draft.loadSidePostLoading = false;
        draft.loadSidePostError = action.error;
        break;
      case LOAD_CATEGORY_POSTS_REQUEST:
        draft.loadCategoryPostsLoading = true;
        draft.loadCategoryPostsDone = false;
        draft.loadCategoryPostsError = false;
        break;
      case LOAD_CATEGORY_POSTS_SUCCESS:
        draft.loadCategoryPostsLoading = false;
        draft.loadCategoryPostsDone = true;
        draft.techPosts = action.data.category === "tech" ? action.data.posts : false;
        draft.dailyPosts = action.data.category === "daily" ? action.data.posts : false;
        draft.postCount = action.data.postCount;
        draft.hashtags = action.data.hashtags;
        draft.hasMorePosts = action.data.posts.length > 8;
        break;
      case LOAD_CATEGORY_POSTS_FAILURE:
        draft.loadCategoryPostsLoading = false;
        draft.loadCategoryPostsError = action.error;
        break;
      case LOAD_MORE_POSTS_REQUEST:
        draft.loadMorePostsLoading = true;
        draft.loadMorePostsDone = false;
        draft.loadMorePostsError = false;
        break;
      case LOAD_MORE_POSTS_SUCCESS:
        draft.loadMorePostsLoading = false;
        draft.loadMorePostsDone = true;
        //카테고리에 맞는 포스트를 넣어준다.
        const moreTechPosts =
          action.data.category === "tech" && draft.techPosts.concat(action.data.morePosts);
        const moreDailyPosts =
          action.data.category === "daily" && draft.dailyPosts.concat(action.data.morePosts);
        draft.techPosts = moreTechPosts;
        draft.dailyPosts = moreDailyPosts;
        //불러온 포스트가 limit값인 6개라는것은 불러온 포스트가 더 있다는 의미이다.
        //만약 갯수가 딱 맞아서 다음 값이 없다고 해도 그 요청은 0개임으로 false가 된다.
        draft.hasMorePosts = action.data.morePosts.length === 9;
        break;
      case LOAD_MORE_POSTS_FAILURE:
        draft.loadMorePostsLoading = false;
        draft.loadMorePostsError = action.error;
        draft.hasMorePosts = false;
        break;
      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = false;
        break;
      case ADD_COMMENT_SUCCESS: {
        draft.post?.Comments?.push(action.data);
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;
      }
      case ADD_COMMENT_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;
      case ADD_COMMENT_CLEAR:
        draft.addCommentLoading = false;
        draft.addCommentDone = false;
        draft.addCommentError = false;
        break;
      case LIKE_POST_REQUEST:
        draft.likePostLoading = true;
        draft.likePostDone = false;
        draft.likePostError = false;
        break;
      case LIKE_POST_SUCCESS: {
        draft.post?.PostLikers?.push({ id: action.data.UserId });
        draft.likePostLoading = false;
        draft.likePostDone = true;
        break;
      }
      case LIKE_POST_FAILURE:
        draft.likePostLoading = false;
        draft.likePostError = action.error;
        break;
      case UNLIKE_POST_REQUEST:
        draft.unlikePostLoading = true;
        draft.unlikePostDone = false;
        draft.unlikePostError = false;
        break;
      case UNLIKE_POST_SUCCESS: {
        draft.post?.PostLikers?.filter((v: any) => v.id !== action.data.UserId);
        draft.unlikePostLoading = false;
        draft.unlikePostDone = true;
        break;
      }
      case UNLIKE_POST_FAILURE:
        draft.unlikePostLoading = false;
        draft.unlikePostError = action.error;
        break;
      case EDIT_POST_REQUEST:
        draft.editPostLoading = true;
        draft.editPostDone = false;
        draft.editPostError = false;
        break;
      case EDIT_POST_SUCCESS:
        draft.editPostLoading = false;
        draft.editPostDone = true;
        draft.onEditPost = false;
        break;
      case EDIT_POST_FAILURE:
        draft.editPostLoading = false;
        draft.editPostError = action.error;
        break;
      case EDIT_POST_CLEAR:
        draft.editPostLoading = false;
        draft.editPostDone = false;
        draft.editPostError = false;
        break;
      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = false;
        break;
      case REMOVE_POST_SUCCESS:
        draft.removePostLoading = false;
        draft.removePostDone = true;
        break;
      case REMOVE_POST_CLEAR:
        draft.removePostLoading = false;
        draft.removePostDone = false;
        break;
      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;
      case REMOVE_COMMENT_REQUEST:
        draft.removeCommentLoading = true;
        draft.removeCommentDone = false;
        draft.removeCommentError = false;
        break;
      case REMOVE_COMMENT_SUCCESS: {
        draft.removeCommentLoading = false;
        draft.removeCommentDone = true;
        break;
      }
      case REMOVE_COMMENT_FAILURE:
        draft.removeCommentLoading = false;
        draft.removeCommentError = action.error;
        break;
      case LIKE_COMMENT_REQUEST:
        draft.likeCommentLoading = true;
        draft.likeCommentDone = false;
        draft.likeCommentError = false;
        break;
      case LIKE_COMMENT_SUCCESS: {
        draft.post?.Comments?.find((v: any) => v.id === action.data.CommentId).CommentLikers.push({
          id: action.data.UserId,
        });
        draft.likeCommentLoading = false;
        draft.likeCommentDone = true;
        break;
      }
      case LIKE_COMMENT_FAILURE:
        draft.likeCommentLoading = false;
        draft.likeCommentError = action.error;
        break;
      case UNLIKE_COMMENT_REQUEST:
        //REQUEST , SUCCESS , FAILURE 로 Reducer를 쪼개서 오류관리를 보다 쉽게 했습니다.
        draft.unlikeCommentLoading = true;
        draft.unlikeCommentDone = false;
        draft.unlikeCommentError = false;
        break;
      case UNLIKE_COMMENT_SUCCESS: {
        //immer 적용으로 불변성을 안지켜도 됨.
        let CommentsWithoutDeleted = draft.post?.Comments?.find(
          (v: CommentsInter) => v.id === action.data.CommentId
        ).CommentLikers.filter((v: any) => v.id !== action.data.UserId);
        draft.post.Comments.find(
          (v: CommentsInter) => v.id === action.data.CommentId
        ).CommentLikers = CommentsWithoutDeleted;
        draft.unlikeCommentLoading = false;
        draft.unlikeCommentDone = true;
        break;
      }
      case UNLIKE_COMMENT_FAILURE:
        draft.unlikeCommentLoading = false;
        draft.unlikeCommentError = action.error;
        break;
      case ADD_SUB_COMMENT_SUCCESS: {
        draft.post?.Comments?.find((v: any) => v.id === action.data.CommentId).SubComments.push(
          action.data.fullSubComment
        );
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;
      }
      case ADD_SUB_COMMENT_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;
      case ADD_SUB_COMMENT_CLEAR:
        draft.addCommentLoading = false;
        draft.addCommentDone = false;
        draft.addCommentError = false;
        break;

      case REMOVE_SUB_COMMENT_REQUEST:
        draft.removeSubCommentLoading = true;
        draft.removeSubCommentDone = false;
        draft.removeSubCommentError = false;
        break;
      case REMOVE_SUB_COMMENT_SUCCESS: {
        draft.removeSubCommentLoading = false;
        draft.removeSubCommentDone = true;
        break;
      }
      case REMOVE_SUB_COMMENT_FAILURE:
        draft.removeSubCommentLoading = false;
        draft.removeSubCommentError = action.error;
        break;
      case UPLOAD_THUMBNAIL_REQUEST:
        draft.uploadThumbnailLoading = true;
        draft.uploadThumbnailDone = false;
        draft.uploadThumbnailError = false;
        break;
      case UPLOAD_THUMBNAIL_SUCCESS: {
        draft.thumbnailPath = action.data;
        draft.uploadThumbnailLoading = false;
        draft.uploadThumbnailDone = true;
        break;
      }
      case UPLOAD_THUMBNAIL_FAILURE:
        draft.uploadThumbnailLoading = false;
        draft.uploadThumbnailError = action.error;
        break;
      case UPLOAD_THUMBNAIL_CLEAR:
        draft.uploadThumbnailLoading = false;
        draft.uploadThumbnailDone = false;
        break;
      case UPLOAD_POST_IMAGE_REQUEST:
        draft.uploadPostImageLoading = true;
        draft.uploadPostImageDone = false;
        draft.uploadPostImageError = false;
        break;
      case UPLOAD_POST_IMAGE_SUCCESS: {
        draft.postImagePath = action.data;
        draft.uploadPostImageLoading = false;
        draft.uploadPostImageDone = true;
        break;
      }
      case UPLOAD_POST_IMAGE_FAILURE:
        draft.uploadPostImageLoading = false;
        draft.uploadPostImageError = action.error;
        break;
      case UPLOAD_POST_IMAGE_CLEAR:
        draft.uploadPostImageLoading = false;
        draft.uploadPostImageDone = false;
        break;
      default:
        break;
    }
  });

export default reducer;
