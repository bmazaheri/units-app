import { Filters } from './filters.models';
import { FiltersActions, FiltersActionTypes } from './filters.actions';

const initialState: Filters = { city: null, neighborhood: null };

export function filtersReducer(state = initialState, action: FiltersActions): Filters {
  switch (action.type) {
    case FiltersActionTypes.SET_CITY_FILTER:
      return { ...state, city: action.payload };

    case FiltersActionTypes.SET_NEIGHBOR_FILTER:
      return { ...state, neighborhood: action.payload };

    default:
      return state;
  }
}