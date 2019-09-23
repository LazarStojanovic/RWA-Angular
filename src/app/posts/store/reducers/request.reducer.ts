import { Request } from "../../models/request.model";
import * as fromRequests from "../actions/request.action";
export interface RequestState {
  entities: { [id: number ] : Request};  
  loaded: boolean;
  loading: boolean;
}

export const initialState: RequestState = {
  entities: {},
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
      const requests = action.requests;
      const entities = requests.reduce((entities: { [id:number]:Request },request) => {
        return{
          ...entities,
          [request.id]: request
        }
      },{
        ...state.entities 
      })
      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
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
export const getRequestsEntities = (state: RequestState) => state.entities;