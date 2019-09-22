import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector
} from "@ngrx/store";
import * as fromRequests from "./request.reducer";

export interface PostState {
  requests: fromRequests.RequestState;
}

export const reducers: ActionReducerMap<PostState> = {
  requests: fromRequests.default
};

export const getPostsState = createFeatureSelector<PostState>("posts");

export const getRequestState = createSelector(
  getPostsState,
  (state: PostState) => state.requests
);

export const getAllRequests =  createSelector(getRequestState, fromRequests.getRequests);
export const getRequestsLoading =  createSelector(getRequestState, fromRequests.getRequestsLoading);
export const getRequestsLoaded =  createSelector(getRequestState, fromRequests.getRequestsLoaded);
