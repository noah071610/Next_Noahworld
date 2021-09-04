import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { Task } from "@redux-saga/types";
import { Store } from "redux";
import { CommentsInter, PostInter, SubCommentsInter } from "./@reducers/@reducerTypes";

export interface IStore extends Store {
  sagaTask?: Task;
}

export interface ArticleInter {
  setOnHashtagFilter?: (type: boolean) => void;
  article: PostInter;
  smallSize?: Boolean;
  type?: string;
  image_src?: string;
}

export interface CommentProps {
  comment: CommentsInter;
  isSubComment?: boolean;
}

export interface SubCommentProps {
  subComment?: SubCommentsInter;
  CommentId: number;
}
