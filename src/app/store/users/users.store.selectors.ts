import { createSelector,createFeatureSelector } from "@ngrx/store";
import { UserState } from "@store/users/users.store.reducer";

// Create access
export const getUserState = createFeatureSelector<UserState>('user')

// Get data User
export const getUser = createSelector (
  getUserState, (state) => state.entity
)

// Get state loading
export const getLoading = createSelector(
  getUserState, (state) => state.loading
)

// if user is authorized (exist in DB)
export const getIsAuthorized = createSelector(
  getUserState, (state) => !!state.email
)
