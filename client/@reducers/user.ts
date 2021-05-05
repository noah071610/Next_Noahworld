import produce from "immer";
import { UserState } from "./@reducerTypes";

const initialState = {
  user: null,
  imagePath: null,
  confirmPassword: false,

  logInLoading: false,
  logInDone: false,
  logInError: false,

  logInGoogleLoading: false,
  logInGoogleDone: false,
  logInGoogleError: false,

  logOutLoading: false,
  logOutDone: false,
  logOutError: false,

  loadInfoLoading: false,
  loadInfoDone: false,
  loadInfoError: false,

  signUpLoading: false,
  signUpDone: false,
  signUpError: false,

  addIconLoading: false,
  addIconDone: false,
  addIconError: false,

  removeIconLoading: false,
  removeIconDone: false,
  removeIconError: false,

  confirmPasswordLoading: false,
  confirmPasswordDone: false,
  confirmPasswordError: false,

  withdrawalLoading: false,
  withdrawalDone: false,
  withdrawalError: false,

  changePasswordLoading: false,
  changePasswordDone: false,
  changePasswordError: false,

  changeNameLoading: false,
  changeNameDone: false,
  changeNameError: false,
};

export const LOG_IN_REQUEST = "LOG_IN_REQUEST" as const;
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS" as const;
export const LOG_IN_FAILURE = "LOG_IN_FAILURE" as const;
export const LOG_IN_CLEAR = "LOG_IN_CLEAR" as const;

export const LOG_IN_GOOGLE_REQUEST = "LOG_IN_GOOGLE_REQUEST" as const;
export const LOG_IN_GOOGLE_SUCCESS = "LOG_IN_GOOGLE_SUCCESS" as const;
export const LOG_IN_GOOGLE_FAILURE = "LOG_IN_GOOGLE_FAILURE" as const;
export const LOG_IN_GOOGLE_CLEAR = "LOG_IN_GOOGLE_CLEAR" as const;

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST" as const;
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS" as const;
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE" as const;
export const LOG_OUT_CLEAR = "LOG_OUT_CLEAR" as const;

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST" as const;
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS" as const;
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE" as const;
export const SIGN_UP_CLEAR = "SIGN_UP_CLEAR" as const;

export const LOAD_INFO_REQUEST = "LOAD_INFO_REQUEST" as const;
export const LOAD_INFO_SUCCESS = "LOAD_INFO_SUCCESS" as const;
export const LOAD_INFO_FAILURE = "LOAD_INFO_FAILURE" as const;

export const ADD_ICON_REQUEST = "ADD_ICON_REQUEST" as const;
export const ADD_ICON_SUCCESS = "ADD_ICON_SUCCESS" as const;
export const ADD_ICON_FAILURE = "ADD_ICON_FAILURE" as const;
export const ADD_ICON_CLEAR = "ADD_ICON_CLEAR" as const;

export const REMOVE_ICON_REQUEST = "REMOVE_ICON_REQUEST" as const;
export const REMOVE_ICON_SUCCESS = "REMOVE_ICON_SUCCESS" as const;
export const REMOVE_ICON_FAILURE = "REMOVE_ICON_FAILURE" as const;
export const REMOVE_ICON_CLEAR = "REMOVE_ICON_CLEAR" as const;

export const CHANGE_PASSWORD_REQUEST = "CHANGE_PASSWORD_REQUEST" as const;
export const CHANGE_PASSWORD_SUCCESS = "CHANGE_PASSWORD_SUCCESS" as const;
export const CHANGE_PASSWORD_FAILURE = "CHANGE_PASSWORD_FAILURE" as const;
export const CHANGE_PASSWORD_CLEAR = "CHANGE_PASSWORD_CLEAR" as const;

export const CHANGE_NAME_REQUEST = "CHANGE_NAME_REQUEST" as const;
export const CHANGE_NAME_SUCCESS = "CHANGE_NAME_SUCCESS" as const;
export const CHANGE_NAME_FAILURE = "CHANGE_NAME_FAILURE" as const;
export const CHANGE_NAME_CLEAR = "CHANGE_NAME_CLEAR" as const;

export const WITHDRWAL_REQUEST = "WITHDRWAL_REQUEST" as const;
export const WITHDRWAL_SUCCESS = "WITHDRWAL_SUCCESS" as const;
export const WITHDRWAL_FAILURE = "WITHDRWAL_FAILURE" as const;
export const WITHDRWAL_CLEAR = "WITHDRWAL_CLEAR" as const;

export const CONFIRM_PASSWORD_REQUEST = "CONFIRM_PASSWORD_REQUEST" as const;
export const CONFIRM_PASSWORD_SUCCESS = "CONFIRM_PASSWORD_SUCCESS" as const;
export const CONFIRM_PASSWORD_FAILURE = "CONFIRM_PASSWORD_FAILURE" as const;
export const CONFIRM_PASSWORD_CLEAR = "CONFIRM_PASSWORD_CLEAR" as const;

const reducer = (state: UserState = initialState, action: any) =>
  produce(state, (draft: any) => {
    switch (action.type) {
      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInError = false;
        draft.logInDone = false;
        break;
      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.user = action.data;
        draft.logInDone = true;
        break;
      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;
      case LOG_IN_CLEAR:
        draft.logInError = false;
        draft.logInDone = false;
        break;
      case LOG_IN_GOOGLE_REQUEST:
        draft.logInGoogleLoading = true;
        draft.logInGoogleError = false;
        draft.logInGoogleDone = false;
        break;
      case LOG_IN_GOOGLE_SUCCESS:
        draft.logInGoogleLoading = false;
        draft.logInGoogleDone = true;
        draft.user = action.data.data;
        break;
      case LOG_IN_GOOGLE_FAILURE:
        draft.logInGoogleLoading = false;
        draft.logInGoogleError = action.error;
        break;
      case LOG_IN_GOOGLE_CLEAR:
        draft.logInGoogleError = false;
        draft.logInGoogleDone = false;
        break;
      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutError = false;
        draft.logOutDone = false;
        break;
      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.user = false;
        break;
      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;
      case LOG_OUT_CLEAR:
        draft.logOutError = false;
        draft.logOutDone = false;
        break;
      case LOAD_INFO_REQUEST:
        draft.loadInfoLoading = true;
        draft.loadInfoDone = false;
        draft.loadInfoError = false;
        break;
      case LOAD_INFO_SUCCESS:
        draft.loadInfoLoading = false;
        draft.loadInfoDone = true;
        draft.user = action.data;
        break;
      case LOAD_INFO_FAILURE:
        draft.loadInfoLoading = false;
        draft.loadInfoError = action.error;
        break;
      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpError = false;
        draft.signUpDone = false;
        break;
      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        draft.onSignUpPage = false;
        break;
      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;
      case SIGN_UP_CLEAR:
        draft.signUpError = false;
        draft.signUpDone = false;
        break;
      case ADD_ICON_REQUEST:
        draft.addIconLoading = true;
        draft.addIconError = false;
        draft.addIconDone = false;
        break;
      case ADD_ICON_SUCCESS:
        draft.addIconLoading = false;
        draft.addIconDone = true;
        draft.user.icon = action.data;
        break;
      case ADD_ICON_FAILURE:
        draft.addIconLoading = false;
        draft.addIconError = action.error;
        break;
      case ADD_ICON_CLEAR:
        draft.addIconLoading = false;
        draft.addIconDone = false;
        draft.addIconError = false;
        break;
      case REMOVE_ICON_REQUEST:
        draft.removeIconLoading = true;
        draft.removeIconError = false;
        draft.removeIconDone = false;
        break;
      case REMOVE_ICON_SUCCESS:
        draft.removeIconLoading = false;
        draft.removeIconDone = true;
        draft.user.icon = "/images/blog/default-user.png";
        break;
      case REMOVE_ICON_FAILURE:
        draft.removeIconLoading = false;
        draft.removeIconError = action.error;
        break;
      case REMOVE_ICON_CLEAR:
        draft.removeIconLoading = false;
        draft.removeIconDone = false;
        draft.removeIconError = false;
        break;
      case CONFIRM_PASSWORD_REQUEST:
        draft.confirmPasswordLoading = true;
        draft.confirmPasswordError = false;
        draft.confirmPasswordDone = false;
        break;
      case CONFIRM_PASSWORD_SUCCESS:
        draft.confirmPasswordLoading = false;
        draft.confirmPasswordDone = true;
        draft.confirmPassword = true;
        break;
      case CONFIRM_PASSWORD_FAILURE:
        draft.confirmPasswordLoading = false;
        draft.confirmPasswordError = action.error;
        break;
      case CONFIRM_PASSWORD_CLEAR:
        draft.confirmPasswordLoading = false;
        draft.confirmPasswordError = false;
        draft.confirmPasswordDone = false;
        break;
      case CHANGE_PASSWORD_REQUEST:
        draft.changePasswordLoading = true;
        draft.changePasswordError = false;
        draft.changePasswordDone = false;
        break;
      case CHANGE_PASSWORD_SUCCESS:
        draft.changePasswordLoading = false;
        draft.changePasswordDone = true;
        break;
      case CHANGE_PASSWORD_FAILURE:
        draft.changePasswordLoading = false;
        draft.changePasswordError = action.error;
        break;
      case CHANGE_PASSWORD_CLEAR:
        draft.changePasswordLoading = false;
        draft.changePasswordDone = false;
        draft.changePasswordError = false;
        break;
      case CHANGE_NAME_REQUEST:
        draft.changeNameLoading = true;
        draft.changeNameError = false;
        draft.changeNameDone = false;
        break;
      case CHANGE_NAME_SUCCESS:
        draft.changeNameLoading = false;
        draft.changeNameDone = true;
        draft.user.name = action.data.newName;
        break;
      case CHANGE_NAME_FAILURE:
        draft.changeNameLoading = false;
        draft.changeNameError = action.error;
        break;
      case CHANGE_NAME_CLEAR:
        draft.changeNameLoading = false;
        draft.changeNameDone = false;
        draft.changeNameError = false;
        break;
      case WITHDRWAL_REQUEST:
        draft.withdrawalLoading = true;
        draft.withdrawalError = false;
        draft.withdrawalDone = false;
        break;
      case WITHDRWAL_SUCCESS:
        draft.withdrawalLoading = false;
        draft.withdrawalDone = true;
        break;
      case WITHDRWAL_FAILURE:
        draft.withdrawalLoading = false;
        draft.withdrawalError = action.error;
        break;
      case WITHDRWAL_CLEAR:
        draft.withdrawalLoading = false;
        draft.withdrawalError = false;
        draft.withdrawalDone = false;
        break;
      default:
        break;
    }
  });

export default reducer;
