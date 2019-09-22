import { Request } from "../../models/request.model";
import * as fromRequests from "../actions/request.action";
export interface RequestState {
  data: Request[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: RequestState = {
  data: [
      {
          id:1,
          title: 'Potrebana 0 negativna krvna grupa'
      }
  ],
  loaded: false,
  loading: false
};

export default function reducer(
  state = initialState,
  action: fromRequests.RequestActions
): RequestState {
  switch (action.type) {
    case fromRequests.LOAD_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case fromRequests.LOAD_REQUEST_SUCCESS: {
      return {
        ...state,
        loading: true
      };
    }
    case fromRequests.LOAD_REQUESTS: {
      return {
        ...state,
        loading: true
      };
    }
    case fromRequests.LOAD_REQUESTS_SUCCESS: {
      console.log(action.requests);
      return {
        ...state,
        loading: false,
        loaded: true
      };
    }
    case fromRequests.CREATE_REQUEST: {
      //izmeniti
      return {
        ...state,
        loading: true
      };
    }
    case fromRequests.UPDATE_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case fromRequests.DELETE_REQUEST: {
      return {
        ...state,
        loading: true
      }; //do ovde
    }
    default:
      return state;
  }
}


export const getRequestsLoading = (state: RequestState) => state.loading;
export const getRequestsLoaded = (state: RequestState) => state.loaded;
export const getRequests = (state: RequestState) => state.data;