import { Offer } from "../../models/offer.model";
import * as fromOffers from "../actions/offer.action";
export interface OfferState {
  entities: { [id: number ] : Offer};  
  loaded: boolean;
  loading: boolean;
}

export const initialState: OfferState = {
  entities: {},
  loaded: false,
  loading: false
};

export default function reducer(
  state = initialState,
  action: fromOffers.OfferActions
): OfferState {
  switch (action.type) {
    case fromOffers.LOAD_OFFER: {
      return {
        ...state,
        loading: true
      };
    }
    case fromOffers.LOAD_OFFER_SUCCESS: {
      return {
        ...state,
        loading: true
      };
    }
    case fromOffers.LOAD_OFFERS: {
      return {
        ...state,
        loading: true
      };
    }
    case fromOffers.LOAD_OFFERS_SUCCESS: {
      const offers = action.offers;
      const entities = offers.reduce((entities: { [id:number]:Offer },offer) => {
        return{
          ...entities,
          [offer.id]: offer
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
    case fromOffers.CREATE_OFFER: {
      //izmeniti
      return {
        ...state,
        loading: true
      };
    }
    case fromOffers.UPDATE_OFFER: {
      return {
        ...state,
        loading: true
      };
    }
    case fromOffers.DELETE_OFFER: {
      return {
        ...state,
        loading: true
      }; //do ovde
    }
    default:
      return state;
  }
}


export const getOffersLoading = (state: OfferState) => state.loading;
export const getOffersLoaded = (state: OfferState) => state.loaded;
export const getOffersEntities = (state: OfferState) => state.entities;