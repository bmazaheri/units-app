import { Action } from '@ngrx/store';

import { UnitsState } from './units.models';

export enum UnitsActionTypes {
  GET = '[Units] Get',
  GET_SUCCESS = '[Units] Get Success',

  SET_FILTER = '[Units] Set Filter'
}

export class GetUnits implements Action {
  readonly type = UnitsActionTypes.GET;
}

export class GetUnitsSuccess implements Action {
  readonly type = UnitsActionTypes.GET_SUCCESS;

  constructor(public payload: UnitsState) {}
}

export type UnitsActions = GetUnits | GetUnitsSuccess;
