import { Action } from "@ngrx/store";
import { Request } from "../../models/request.model";

export const LOAD_REQUEST = "[Request] Load";
export const LOAD_REQUESTS = "[Requests] Load";
export const LOAD_REQUEST_SUCCESS = "[Request] Load Succes";
export const LOAD_REQUESTS_SUCCESS = "[Requests] Load Succes";
export const CREATE_REQUEST = "[Request] Create";
export const UPDATE_REQUEST = "[Request] Update";
export const DELETE_REQUEST = "[Request] Delete";

export class LoadRequest implements Action {
  readonly type = LOAD_REQUEST;
}

export class LoadRequestSuccess implements Action {
  readonly type = LOAD_REQUEST_SUCCESS;

  constructor(public request: Request) {}
}
export class LoadRequests implements Action {
  readonly type = LOAD_REQUESTS;
}

export class LoadRequestsSuccess implements Action {
  readonly type = LOAD_REQUESTS_SUCCESS;

  constructor(public requests: Request[]) {}
}

export class CreateRequest implements Action {
  readonly type = CREATE_REQUEST;
  constructor(public request: Request) {}
}

export class UpdateRequest implements Action {
  readonly type = UPDATE_REQUEST;
  constructor(public id: number, public title: Partial<Request>) {}
}

export class DeleteRequest implements Action {
  readonly type = DELETE_REQUEST;
  constructor(public id: number) {}
}

export type RequestActions =
  | LoadRequest
  | LoadRequestSuccess
  | LoadRequests
  | LoadRequestsSuccess
  | CreateRequest
  | UpdateRequest
  | DeleteRequest;
