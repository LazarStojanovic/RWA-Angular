import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import * as offerActions from "../actions/offer.action";
import { switchMap, map } from "rxjs/operators";
import { OffersService } from "../../services/offer.service";
@Injectable()
export class OffersEffects {
  constructor(
    private actions$: Actions,
    private offerService: OffersService
  ) {}

  @Effect()
  loadRequests$ = this.actions$.pipe(
    ofType(offerActions.LOAD_OFFERS),
    switchMap(() =>
      this.offerService
        .getOffers()
        .pipe(map(respones => new offerActions.LoadOffersSuccess(respones)))
    )
  );
}