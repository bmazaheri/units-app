import { UnitsActions, UnitsActionTypes } from './units.actions';
import { Unit } from './units.models';

const initialState: Unit[] = [];

export function unitsReducer(state = initialState, action: UnitsActions): Unit[] {
  switch (action.type) {
    case UnitsActionTypes.GET_SUCCESS:
      return [...action.payload];

    default:
      return state;
  }
}