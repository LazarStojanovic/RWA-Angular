import { Action } from "@ngrx/store";
import { Offer } from "../../models/offer.model";

export const LOAD_OFFER = "[Offer] Load";
export const LOAD_OFFERS = "[Offers] Load";
export const LOAD_OFFER_SUCCESS = "[Offer] Load Succes";
export const LOAD_OFFERS_SUCCESS = "[Offers] Load Succes";
export const CREATE_OFFER = "[Offer] Create";
export const UPDATE_OFFER = "[Offer] Update";
export const DELETE_OFFER = "[Offer] Delete";

export class LoadOffer implements Action {
  readonly type = LOAD_OFFER;
}

export class LoadOfferSuccess implements Action {
  readonly type = LOAD_OFFER_SUCCESS;

  constructor(public OFFER: Offer) {}
}
export class LoadOffers implements Action {
  readonly type = LOAD_OFFERS;
}

export class LoadOffersSuccess implements Action {
  readonly type = LOAD_OFFERS_SUCCESS;

  constructor(public offers: Offer[]) {}
}

export class CreateOffer implements Action {
  readonly type = CREATE_OFFER;
  constructor(public offer: Offer) {}
}

export class UpdateOffer implements Action {
  readonly type = UPDATE_OFFER;
  constructor(public id: number, public title: Partial<Offer>) {}
}

export class DeleteOffer implements Action {
  readonly type = DELETE_OFFER;
  constructor(public id: number) {}
}

export type OfferActions =
  | LoadOffer
  | LoadOfferSuccess
  | LoadOffers
  | LoadOffersSuccess
  | CreateOffer
  | UpdateOffer
  | DeleteOffer;