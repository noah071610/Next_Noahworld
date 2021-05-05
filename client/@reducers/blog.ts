import produce from "immer";
import { portfolio1, portfolio2, portfolio3 } from "../config";
import { BlogState } from "./@reducerTypes";

const initialState = {
  theme: "light",
  header: "blog",
  portfolios: null,
  portfolio: null,
  prePortfolio: [],
  postPortfolio: [],
  posts: [],
  onAbout: false,
  onSignUpPage: false,
  postEditOn: false,
  searchPosts: [],
  hashtagPosts: [],
  onSlideMenu: false,
  onHeaderTitle: false,

  searchedKeyword: null,

  searchKeywordLoading: false,
  searchKeywordDone: false,
  searchKeywordError: false,

  searchHashTagLoading: false,
  searchHashTagDone: false,
  searchHashTagError: false,

  addQuizLoading: false,
  addQuizDone: false,
  addQuizError: false,
};

export const MODE_CHANGE = "MODE_CHANGE" as const;
export const LOAD_PORTFOLIOS = "LOAD_PORTFOLIOS" as const;
export const LOAD_PORTFOLIO = "LOAD_PORTFOLIO" as const;
export const LOAD_PREPORTFOLIO = "LOAD_PREPORTFOLIO" as const;
export const LOAD_POSTPORTFOLIO = "LOAD_PSTPORTFOLIO" as const;
export const CHAGE_HEADER = "CHAGE_HEADER" as const;
export const SWITCH_ABOUT = "SWITCH_ABOUT" as const;
export const ON_ABOUT = "ON_ABOUT" as const;
export const OFF_ABOUT = "OFF_ABOUT" as const;
export const ON_SIGN_UP_PAGE = "ON_SIGN_UP_PAGE" as const;
export const REMOVE_IMAGE = "REMOVE_IMAGE" as const;
export const POST_EDIT_ON = "POST_EDIT_ON" as const;
export const POST_EDIT_OFF = "POST_EDIT_OFF" as const;
export const CLICK_HASH_TAG = "CLICK_HASH_TAG" as const;
export const ON_SLIDE_MENU = "ON_SLIDE_MENU" as const;
export const ON_HEADER_TITLE = "ON_HEADER_TITLE" as const;

export const SEARCH_KEYWORD_REQUEST = "SEARCH_KEYWORD_REQUEST" as const;
export const SEARCH_KEYWORD_SUCCESS = "SEARCH_KEYWORD_SUCCESS" as const;
export const SEARCH_KEYWORD_FAILURE = "SEARCH_KEYWORD_FAILURE" as const;
export const SEARCH_KEYWORD_CLEAR = "SEARCH_KEYWORD_CLEAR" as const;

export const SEARCH_HASH_TAG_REQUEST = "SEARCH_HASH_TAG_REQUEST" as const;
export const SEARCH_HASH_TAG_SUCCESS = "SEARCH_HASH_TAG_SUCCESS" as const;
export const SEARCH_HASH_TAG_FAILURE = "SEARCH_HASH_TAG_FAILURE" as const;
export const SEARCH_HASH_TAG_CLEAR = "SEARCH_HASH_TAG_CLEAR" as const;

export const ADD_QUIZ_REQUEST = "ADD_QUIZ_REQUEST" as const;
export const ADD_QUIZ_SUCCESS = "ADD_QUIZ_SUCCESS" as const;
export const ADD_QUIZ_FAILURE = "ADD_QUIZ_FAILURE" as const;
export const ADD_QUIZ_CLEAR = "ADD_QUIZ_CLEAR" as const;

const reducer = (state: BlogState = initialState, action: any) =>
  produce(state, (draft) => {
    switch (action.type) {
      case MODE_CHANGE:
        draft.theme = action.data;
        break;
      case LOAD_PORTFOLIOS:
        draft.portfolios = [portfolio1, portfolio2, portfolio3];
        break;
      case LOAD_PORTFOLIO:
        draft.portfolios = [portfolio1, portfolio2, portfolio3];
        draft.portfolio = draft.portfolios[action.id - 1];
        break;
      case CHAGE_HEADER:
        draft.header = action.header;
        break;
      case SWITCH_ABOUT:
        draft.onAbout = !draft.onAbout;
        break;
      case ON_ABOUT:
        draft.onAbout = true;
        break;
      case OFF_ABOUT:
        draft.onAbout = false;
        break;
      case ON_SIGN_UP_PAGE:
        draft.onSignUpPage = action.data;
        break;
      case POST_EDIT_ON:
        draft.postEditOn = !draft.postEditOn;
        break;
      case ON_SLIDE_MENU:
        draft.onSlideMenu = !draft.onSlideMenu;
        break;
      case ON_HEADER_TITLE:
        draft.onHeaderTitle = action.data;
        break;
      case POST_EDIT_OFF:
        draft.postEditOn = false;
        break;
      case SEARCH_KEYWORD_REQUEST:
        draft.searchKeywordLoading = true;
        draft.searchKeywordDone = false;
        draft.searchKeywordError = false;
        break;
      case SEARCH_KEYWORD_SUCCESS: {
        draft.searchPosts = action.data.searchPosts;
        draft.searchKeywordLoading = false;
        draft.searchKeywordDone = true;
        draft.searchedKeyword = action.data.searchedKeyword;
        break;
      }
      case SEARCH_KEYWORD_FAILURE:
        draft.searchKeywordLoading = false;
        draft.searchKeywordError = action.error;
        break;
      case SEARCH_KEYWORD_CLEAR:
        draft.searchKeywordLoading = false;
        draft.searchKeywordDone = false;
        draft.searchKeywordError = false;
        break;
      case SEARCH_HASH_TAG_REQUEST:
        draft.searchHashTagLoading = true;
        draft.searchHashTagDone = false;
        draft.searchHashTagError = false;
        break;
      case SEARCH_HASH_TAG_SUCCESS: {
        draft.searchHashTagLoading = false;
        draft.searchHashTagDone = true;
        draft.hashtagPosts = action.data.hashtagPosts;
        break;
      }
      case SEARCH_HASH_TAG_FAILURE:
        draft.searchHashTagLoading = false;
        draft.searchHashTagError = action.error;
        break;
      case SEARCH_HASH_TAG_CLEAR:
        draft.searchHashTagLoading = false;
        draft.searchHashTagDone = false;
        draft.searchHashTagError = false;
        break;
      case ADD_QUIZ_REQUEST:
        draft.addQuizLoading = true;
        draft.addQuizDone = false;
        draft.addQuizError = false;
        break;
      case ADD_QUIZ_SUCCESS:
        draft.addQuizLoading = false;
        draft.addQuizDone = true;
        break;
      case ADD_QUIZ_FAILURE:
        draft.addQuizLoading = false;
        draft.addQuizError = action.error;
        break;
      case ADD_QUIZ_CLEAR:
        draft.addQuizLoading = false;
        draft.addQuizDone = false;
        draft.addQuizError = false;
        break;
      default:
        break;
    }
  });

export default reducer;
