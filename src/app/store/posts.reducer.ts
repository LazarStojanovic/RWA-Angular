import { Post } from "../models/post";
import { Action } from "@ngrx/store";
import { DELETE_POST, DeletePost } from "./post.action";

const initialState: Post[] = [
  {
    id: "rambo",
    title: "Rambo"
  }
];
export default function reducer(state: Post[] = initialState, action: Action) {
  switch (action.type) {
    case DELETE_POST: {
      const { postId } = action as DeletePost;
      return state.filter((post: Post) => post.id !== postId);
    }
    default:
      return state;
  }
}
