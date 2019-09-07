import { Action } from "@ngrx/store";
import { Post } from "../models/post";

export const ADD_POST = "[Add post]";
export const DELETE_POST = "[Delete post]";
export const SELECT_POST = "[Select post]";

export class AddPost implements Action {
  readonly type = ADD_POST;

  constructor(public posts: Post[]) {}
}
export class DeletePost implements Action {
  type = DELETE_POST;
  constructor(public postId: string) {}
}

export class SelectPost implements Action {
  type = SELECT_POST;
  constructor(public postId: string) {}
}
