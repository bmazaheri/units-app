import {
  ActionReducerMap,
} from '@ngrx/store';

import { unitsReducer, UnitsEffects, UnitsState } from './units';
import { Filters, filtersReducer } from './filters';

export interface AppState {
  units: UnitsState;
  filters: Filters;
}

export const reducers: ActionReducerMap<AppState> = {
  units: unitsReducer,
  filters: filtersReducer,
};

export const effects = [UnitsEffects];

