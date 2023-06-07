import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";
import { InmuebleState, reducer } from "./inmueble/inmueble.store.reducers";
import { SaveEffects } from "./inmueble/inmueble.store.effects";
//import { getInmuebleState, InmuebleState } from "../inmueble.store";

export interface InmuebleListState { list: InmuebleState }

export const reducers : ActionReducerMap<InmuebleListState> = { list: reducer }

export const effects : any = [ SaveEffects ]

export const getInmuebleState = createFeatureSelector<InmuebleListState>('inmueble')
