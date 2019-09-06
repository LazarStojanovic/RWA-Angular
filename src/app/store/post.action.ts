import { Action } from "@ngrx/store";

export const DELETE_POST = "[Delete post]"; //oivici se da se lepse formatira
export const SELECT_POST = "[Select post]";

export class DeletePost implements Action {
  type = DELETE_POST;
  constructor(public postId: string) {}
}

export class SelectPost implements Action {
  type = SELECT_POST;
  constructor(public postId: string) {}
}
