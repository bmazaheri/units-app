import { UnitsActions, UnitsActionTypes } from './units.actions';
import { UnitsState } from './units.models';

const initialState: UnitsState = {
  units: [],
  totalElements: 0
};

export function unitsReducer(
  state = initialState,
  action: UnitsActions
): UnitsState {
  switch (action.type) {
    case UnitsActionTypes.GET_SUCCESS:
      return {
        units: action.payload.data,
        totalElements: action.payload.totalElements
      };

    default:
      return state;
  }
}
