import { UnitsActions, UnitsActionTypes } from './units.actions';
import { Unit, UnitsState } from './units.models';

const initialState: UnitsState = {
  data: [],
  totalElements: 0
};

export function unitsReducer(
  state = initialState,
  action: UnitsActions
): UnitsState {
  switch (action.type) {
    case UnitsActionTypes.GET_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}
