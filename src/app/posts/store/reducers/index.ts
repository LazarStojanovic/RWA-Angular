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

export const getRequestsEntities = createSelector(
  getRequestState,
  fromRequests.getRequestsEntities
);
export const getRequestsLoading = createSelector(
  getRequestState,
  fromRequests.getRequestsLoading
);
export const getRequestsLoaded = createSelector(
  getRequestState,
  fromRequests.getRequestsLoaded
);
export const getAllRequests = createSelector(
  getRequestsEntities,
  entities => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
  }
);
