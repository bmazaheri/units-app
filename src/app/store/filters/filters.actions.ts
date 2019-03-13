import { Action } from '@ngrx/store';

export enum FiltersActionTypes {
  SET_CITY_FILTER = '[Filters] Set City Filter',
  RESET_CITY_FILTER = '[Filters] Reset City Filter',

  SET_NEIGHBOR_FILTER = '[Filters] Set Neighbor Filter',
  RESET_NEIGHBOR_FILTER = '[Filters] Reset Neighbor Filter'
}

export class SetCityFilter implements Action {
  readonly type = FiltersActionTypes.SET_CITY_FILTER;

  constructor(public payload: string) {}
}

export class ResetCityFilter implements Action {
  readonly type = FiltersActionTypes.RESET_CITY_FILTER;
}

export class SetNeighborFilter implements Action {
  readonly type = FiltersActionTypes.SET_NEIGHBOR_FILTER;

  constructor(public payload: string) {}
}

export class ResetNeighborFilter implements Action {
  readonly type = FiltersActionTypes.RESET_NEIGHBOR_FILTER;
}

export type FiltersActions =
  | SetCityFilter
  | SetNeighborFilter
  | ResetCityFilter
  | ResetNeighborFilter;
