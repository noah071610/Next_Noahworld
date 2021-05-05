import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import user from "./user";
import post from "./post";
import blog from "./blog";
import { BlogState, PostState, UserState } from "./@reducerTypes";

export interface RootState {
  blog: BlogState;
  user: UserState;
  post: PostState;
}

const rootReducer = (state: RootState, action: any) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        post,
        blog,
        user,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
