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

export interface Portfolio_SkillBox {
  name: string;
  src: string;
  level?: boolean;
  desc?: string;
  popup?: boolean;
  licenseKor?: string;
  content?: React.ReactNode;
}

export interface NavInter {
  navContents: Array<NavProps>;
}

export interface NavProps {
  icon: IconDefinition;
  explain: string;
  name: string;
}
