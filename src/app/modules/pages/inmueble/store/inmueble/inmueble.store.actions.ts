import { Action } from '@ngrx/store'
import { InmuebleCreateRequest, InmuebleResponse } from '@modules/pages/inmueble/store/inmueble/inmueble.store.interfaces'

export enum Types {
  CREATE = '[Inmueble] Create: Start',
  CREATE_SUCCESS = '[Inmueble] Create: Success',
  CREATE_ERROR = '[Inmueble] Create: Error'
}

// STATUS CREATE INMUEBLE
export class Create implements Action {
  readonly type = Types.CREATE;
  constructor(public inmueble: InmuebleCreateRequest) {}
}

export class CreateSuccess implements Action {
  readonly type = Types.CREATE_SUCCESS;
  constructor(public inmueble: InmuebleResponse) {}
}

export class CreateError implements Action {
  readonly type = Types.CREATE_ERROR;
  constructor(public error: string) {}
}

export type All = Create | CreateSuccess | CreateError;
