import { Action } from '@ngrx/store';
import { EmailPasswordCredentials, UserCreateRequest, UserRequest, UsersResponse } from '@store/users/users.store.interfaces';

export enum Types {
  INIT = '[User] Init: Start',
  INIT_AUTHORIZED = '[User] Init: Authorized',
  INIT_UNAUTHORIZED = '[User] Init: Unauthorized',
  INIT_ERROR = '[User] Init: Error',

  SIGN_IN_EMAIL = '[User] Login: Start',
  SIGN_IN_EMAIL_SUCCESS = '[User] Login: Success',
  SIGN_IN_EMAIL_ERROR = '[User] Login: Error',

  SIGN_UP_EMAIL = '[User] Register: Start',
  SIGN_UP_EMAIL_SUCCESS = '[User] Register: Success',
  SIGN_UP_EMAIL_ERROR = '[User] Register: Error',

  SIGN_OUT_EMAIL = '[User] Logout: Start',
  SIGN_OUT_EMAIL_SUCCESS = '[User] Logout: Success',
  SIGN_OUT_EMAIL_ERROR = '[User] Logout: Error',
}

// USER INIT SESSION
export class Init implements Action {
  readonly type = Types.INIT;
  constructor() {}
}

export class InitAuthorized implements Action {
  readonly type = Types.INIT_AUTHORIZED;
  constructor(public email: string, public user: UsersResponse | null) {}
}

export class InitUnAuthorized implements Action {
  readonly type = Types.INIT_UNAUTHORIZED;
  constructor() {}
}

export class InitError implements Action {
  readonly type = Types.INIT_ERROR;
  constructor(public error: string) {}
}

// USER LOGIN
export class SignInEmail implements Action {
  readonly type = Types.SIGN_IN_EMAIL;
  constructor(public credentials: EmailPasswordCredentials) {}
}

export class SignInEmailSuccess implements Action {
  readonly type = Types.SIGN_IN_EMAIL_SUCCESS;
  constructor(public email: string, public user: UsersResponse | null) {}
}

export class SignInEmailError implements Action {
  readonly type = Types.SIGN_IN_EMAIL_ERROR;
  constructor(public error: string) {}
}

// USER REGISTER
export class SignUpEmail implements Action {
  readonly type = Types.SIGN_UP_EMAIL;
  constructor(public user: UserCreateRequest) {}
}

export class SignUpEmailSuccess implements Action {
  readonly type = Types.SIGN_UP_EMAIL_SUCCESS;
  constructor(public email: string, public user: UsersResponse | null) {}
}

export class SignUpEmailError implements Action {
  readonly type = Types.SIGN_UP_EMAIL_ERROR;
  constructor(public error: string) {}
}

// USER LOGOUT
export class SignOutEmail implements Action {
  readonly type = Types.SIGN_OUT_EMAIL;
  constructor() {}
}

export class SignOutEmailSuccess implements Action {
  readonly type = Types.SIGN_OUT_EMAIL;
  constructor() {}
}

export class SignOutEmailError implements Action {
  readonly type = Types.SIGN_OUT_EMAIL_ERROR;
  constructor(public error: string) {}
}

export type All = Init | InitAuthorized | InitUnAuthorized | InitError
                  | SignInEmail | SignInEmailSuccess | SignInEmailError
                  | SignUpEmail | SignUpEmailSuccess | SignUpEmailError
                  | SignOutEmail | SignOutEmailSuccess | SignOutEmailError;
