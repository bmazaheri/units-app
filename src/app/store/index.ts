import {
  ActionReducerMap,
} from '@ngrx/store';

import { unitsReducer, UnitsEffects, Unit } from './units';
import { Filters, filtersReducer } from './filters';

export interface AppState {
  units: Unit[];
  filters: Filters;
}

export const reducers: ActionReducerMap<AppState> = {
  units: unitsReducer,
  filters: filtersReducer,
};

export const effects = [UnitsEffects];

