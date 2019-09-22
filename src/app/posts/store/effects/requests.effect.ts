import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import * as requestActions from "../actions/request.action";
import { switchMap, map } from "rxjs/operators";
import { RequestsService } from "../../services/request.service";
@Injectable()
export class RequestsEffects {
  constructor(
    private actions$: Actions,
    private requestService: RequestsService
  ) {}

  @Effect()
  loadRequests$ = this.actions$.pipe(
    ofType(requestActions.LOAD_REQUESTS),
    switchMap(() =>
      this.requestService
        .getRequests()
        .pipe(map(respones => new requestActions.LoadRequestsSuccess(respones)))
    )
  );
}
