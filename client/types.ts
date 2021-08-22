import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { Task } from "@redux-saga/types";
import { Store } from "redux";
import { CommentsInter, PostInter, SubCommentsInter } from "./@reducers/@reducerTypes";

export interface IStore extends Store {
  sagaTask?: Task;
}

export interface ArticleInter {
  article: PostInter;
  nocontent?: Boolean;
  type?: string;
}

export interface CommentProps {
  comment: CommentsInter;
}

export interface SubCommentProps {
  subComment?: SubCommentsInter;
  CommentId: number;
}

export interface NavProps {
  icon: IconDefinition;
  explain: string;
  name: string;
}
