import { Post } from "../models/post";
import { ActionReducerMap, reduceState } from "@ngrx/store";
import postsReducer from "./posts.reducer";

export interface State {
  posts: Post[];
}

export const rootReducer: ActionReducerMap<State> = {
  posts: postsReducer
};
