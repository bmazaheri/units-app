import {
  ActionReducerMap,
} from '@ngrx/store';

import { unitsReducer, UnitsEffects, UnitsState } from './units';
import { Filters, filtersReducer } from './filters';

export interface AppState {
  unitsState: UnitsState;
  filtersState: Filters;
}

export const reducers: ActionReducerMap<AppState> = {
  unitsState: unitsReducer,
  filtersState: filtersReducer,
};

export const effects = [UnitsEffects];

