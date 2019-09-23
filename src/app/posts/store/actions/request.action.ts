import { Action } from "@ngrx/store";
import { Request } from "../../models/request.model";


export const LOAD_REQUESTS = "[Requests] Load";
export const LOAD_REQUESTS_SUCCESS = "[Requests] Load Succes";


export class LoadRequests implements Action {
  readonly type = LOAD_REQUESTS;
}

export class LoadRequestsSuccess implements Action {
  readonly type = LOAD_REQUESTS_SUCCESS;

  constructor(public requests: Request[]) {}
}

export type RequestActions =
  | LoadRequests
  | LoadRequestsSuccess;
