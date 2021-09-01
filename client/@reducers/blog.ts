import produce from "immer";
import { BlogState } from "./@reducerTypes";

const initialState = {
  posts: [],
  onAbout: false,
  onSignUpPage: false,
  postEditOn: false,
  searchPosts: [],
  onSlideMenu: false,
  onHeaderTitle: false,

  searchedKeyword: null,

  searchKeywordLoading: false,
  searchKeywordDone: false,
  searchKeywordError: false,

  searchHashTagLoading: false,
  searchHashTagDone: false,
  searchHashTagError: false,
};

export const MODE_CHANGE = "MODE_CHANGE" as const;
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

const reducer = (state: BlogState = initialState, action: any) =>
  produce(state, (draft) => {
    switch (action.type) {
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

      default:
        break;
    }
  });

export default reducer;
