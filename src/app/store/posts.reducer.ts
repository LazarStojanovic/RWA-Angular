import { Post } from "../models/post";
import { Action } from "@ngrx/store";
import { ADD_POST, AddPost, DELETE_POST, DeletePost } from "./post.action";

const initialState: Post[] = [
  {
    id: "0",
    title: "Rambo"
  }
];
export default function reducer(state: Post[] = initialState, action: Action) {
  switch (action.type) {
    case ADD_POST:{
      const { posts } = action as AddPost;
      return [...state, ...posts];
    }
    case DELETE_POST: {
      const { postId } = action as DeletePost;
      return state.filter((post: Post) => post.id !== postId);
    }
    default:
      return state;
  }
}
