import { Action } from '@ngrx/store';

import { Unit } from './units.models';

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

  constructor(public payload: Unit[]) { }
}

export class SetUnitsFilter implements Action {
  readonly type = UnitsActionTypes.GET_SUCCESS;

  constructor(public payload: Unit[]) { }
}

export type UnitsActions = GetUnits | GetUnitsSuccess;