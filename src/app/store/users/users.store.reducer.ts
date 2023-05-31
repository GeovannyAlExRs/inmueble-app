import { UsersResponse } from "@store/users/users.store.interfaces";
import * as fromActions from "@store/users/users.store.actions";

// DB Local
export interface UserState {
  entity: UsersResponse | null;
  id: string | null;
  email : string | null;
  loading: boolean | null;
  error: string | null;
}

const initialState: UserState = {
  entity: null,
  id: null,
  email : null,
  loading: null,
  error: null
}

export function reducer(state = initialState, action: fromActions.All | any) : UserState {
  switch(action.type) {
    // INIT
    case fromActions.Types.INIT : return { ...state, loading: true }
    case fromActions.Types.INIT_AUTHORIZED : return { ...state, loading: false, entity: action.user, id: action.id, error: null }
    case fromActions.Types.INIT_ERROR : return { ...state, loading: false, entity: null, id: null, error: action.error }
    case fromActions.Types.INIT_UNAUTHORIZED : return { ...state, loading: false, entity: null, id: null, error: null }

    // LOGIN
    case fromActions.Types.SIGN_IN_EMAIL : return { ...state, loading: true, entity: null, id: null, error: null }
    case fromActions.Types.SIGN_IN_EMAIL_SUCCESS : return { ...state, loading: false, entity: action.user, id: action.id, error: null }
    case fromActions.Types.SIGN_IN_EMAIL_ERROR : return { ...state, loading: false, entity: null, id: null, error: action.error }

    // REGISTER
    case fromActions.Types.SIGN_UP_EMAIL : return { ...state, loading: true, entity: null, id: null, error: null }
    case fromActions.Types.SIGN_UP_EMAIL_SUCCESS : return { ...state, loading: false, entity: action.user, id: action.id, error: null }
    case fromActions.Types.SIGN_UP_EMAIL_ERROR : return { ...state, loading: false, entity: null, id: null, error: action.error }

    // LOGOUT
    case fromActions.Types.SIGN_OUT_EMAIL : return { ...initialState }
    case fromActions.Types.SIGN_OUT_EMAIL_SUCCESS : return { ...initialState }
    case fromActions.Types.SIGN_OUT_EMAIL_ERROR : return { ...state, loading: false, entity: null, id: null, error: action.error }

    default: { return state }
  }
}
