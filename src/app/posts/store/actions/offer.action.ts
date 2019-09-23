import { Action } from "@ngrx/store";
import { Offer } from "../../models/offer.model";


export const LOAD_OFFERS = "[Offers] Load";
export const LOAD_OFFERS_SUCCESS = "[Offers] Load Succes";

export class LoadOffers implements Action {
  readonly type = LOAD_OFFERS;
}

export class LoadOffersSuccess implements Action {
  readonly type = LOAD_OFFERS_SUCCESS;

  constructor(public offers: Offer[]) {}
}


export type OfferActions =
  | LoadOffers
  | LoadOffersSuccess;