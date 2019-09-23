import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector
} from "@ngrx/store";
import * as fromRequests from "./request.reducer";
import * as fromOffers from "./offer.reducer";

export interface PostState {
  requests: fromRequests.RequestState;
  offers: fromOffers.OfferState;
}

export const reducers: ActionReducerMap<PostState> = {
  requests: fromRequests.default,
  offers: fromOffers.default
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

//

export const getOfferState = createSelector(
  getPostsState,
  (state: PostState) => state.offers
);

export const getOffersEntities = createSelector(
  getOfferState,
  fromOffers.getOffersEntities
);
export const getOffersLoading = createSelector(
  getOfferState,
  fromOffers.getOffersLoading
);
export const getOffersLoaded = createSelector(
  getRequestState,
  fromOffers.getOffersLoaded
);
export const getAllOffers = createSelector(
  getOffersEntities,
  entities => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
  }
);
