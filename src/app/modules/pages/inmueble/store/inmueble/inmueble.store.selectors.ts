import { createSelector } from "@ngrx/store";
import { getInmuebleState, InmuebleListState } from "../inmueble.store";
import { InmuebleState } from "./inmueble.store.reducers";

export const getListInmuebleState = createSelector(
  getInmuebleState,
  (state: InmuebleListState) => state.list
)

export const getLoading = createSelector(
  getListInmuebleState,
  (state: InmuebleState) => state.loading
)

export const getInmuebles = createSelector(
  getListInmuebleState,
  (state: InmuebleState) => state.inmuebles
)
