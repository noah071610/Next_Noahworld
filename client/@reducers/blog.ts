import produce from "immer";
import { BlogState } from "./@reducerTypes";

const initialState = {
  posts: [],
  onSignUpPage: false,
  postEditOn: false,
  searchPosts: [],
  onSlideMenu: false,
  searchedKeyword: null,
  searchKeywordLoading: false,
  searchKeywordDone: false,
  searchKeywordError: false,

  searchHashTagLoading: false,
  searchHashTagDone: false,
  searchHashTagError: false,
};

export const ON_SIGN_UP_PAGE = "ON_SIGN_UP_PAGE" as const;
export const REMOVE_IMAGE = "REMOVE_IMAGE" as const;
export const POST_EDIT_ON = "POST_EDIT_ON" as const;
export const POST_EDIT_OFF = "POST_EDIT_OFF" as const;
export const ON_SLIDE_MENU = "ON_SLIDE_MENU" as const;

export const SEARCH_KEYWORD_REQUEST = "SEARCH_KEYWORD_REQUEST" as const;
export const SEARCH_KEYWORD_SUCCESS = "SEARCH_KEYWORD_SUCCESS" as const;
export const SEARCH_KEYWORD_FAILURE = "SEARCH_KEYWORD_FAILURE" as const;
export const SEARCH_KEYWORD_CLEAR = "SEARCH_KEYWORD_CLEAR" as const;

const reducer = (state: BlogState = initialState, action: any) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ON_SIGN_UP_PAGE:
        draft.onSignUpPage = action.data;
        break;
      case POST_EDIT_ON:
        draft.postEditOn = !draft.postEditOn;
        break;
      case ON_SLIDE_MENU:
        draft.onSlideMenu = !draft.onSlideMenu;
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
