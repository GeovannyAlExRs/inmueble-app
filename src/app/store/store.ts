import { ActionReducerMap } from "@ngrx/store";

import * as fromUserActions from '@store/users/users.store.actions';
import * as fromUserEffects from '@store/users/users.store.effects';
import * as fromUserInterfaces from '@store/users/users.store.interfaces';
import * as fromUserReducer from '@store/users/users.store.reducer';
import * as fromUserSelectors from '@store/users/users.store.selectors';

export interface State {
  user: fromUserReducer.UserState
}

export const reducers: ActionReducerMap<State> = {
  user: fromUserReducer.reducer
}

export const effects = [ fromUserEffects.UserEffects ]
