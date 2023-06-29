import { InmuebleResponse } from "./inmueble.store.interfaces";
import * as fromActions from "./inmueble.store.actions";

export interface InmuebleState {
  inmuebles: InmuebleResponse[] | null;
  inmueble: InmuebleResponse | null;
  loading: boolean | null;
  error: string | null;
}

const initialState: InmuebleState = {
  inmuebles: null,
  inmueble: null,
  loading: null,
  error: null
}

export function reducer(state: InmuebleState = initialState, action: fromActions.All | any) {
  switch(action.type) {
    case fromActions.Types.CREATE: return {...state, loading: true, error: null }
    case fromActions.Types.CREATE_SUCCESS: return {...state, inmueble: action.inmueble, loading: false, error: null }
    case fromActions.Types.CREATE_ERROR: return {...state, loading: false, error: action.error }

    case fromActions.Types.READ: return {...state, loading: true, error: null }
    case fromActions.Types.READ_SUCCESS: return {...state, loading: false, inmuebles: action.inmuebles }
    case fromActions.Types.READ_ERROR: return {...state, loading: false, error: action.error }

    default: return state
  }
}
