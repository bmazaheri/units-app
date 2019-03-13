import { Filters } from './filters.models';
import { FiltersActions, FiltersActionTypes } from './filters.actions';

const initialState: Filters = { city: null, neighborhood: null };

export function filtersReducer(
  state = initialState,
  action: FiltersActions
): Filters {
  switch (action.type) {
    case FiltersActionTypes.SET_CITY_FILTER:
      return { ...state, city: action.payload };

    case FiltersActionTypes.RESET_CITY_FILTER:
      return { ...state, city: null };

    case FiltersActionTypes.SET_NEIGHBOR_FILTER:
      return { ...state, neighborhood: action.payload };

    case FiltersActionTypes.RESET_NEIGHBOR_FILTER:
      return { ...state, neighborhood: null };

    default:
      return state;
  }
}
