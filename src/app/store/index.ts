import {
  ActionReducerMap,
} from '@ngrx/store';

import { unitsReducer, UnitsEffects, Unit } from './units';
import { FiltersEffects, Filters, filtersReducer } from './filters';

interface State {
  units: Unit[];
  filters: Filters;
}

export const reducers: ActionReducerMap<State> = {
  units: unitsReducer,
  filters: filtersReducer,
};

export const effects = [FiltersEffects, UnitsEffects];

