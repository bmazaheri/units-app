import { Action } from '@ngrx/store';

export enum FiltersActionTypes {
  SET_CITY_FILTER = '[Filters] Set City Filter',
  SET_NEIGHBOR_FILTER = '[Filters] Set Neighbor Filter',
}

export class SetCityFilter implements Action {
  readonly type = FiltersActionTypes.SET_CITY_FILTER;

  constructor(public payload: string) { }
}

export class SetNeighborFilter implements Action {
  readonly type = FiltersActionTypes.SET_NEIGHBOR_FILTER;

  constructor(public payload: string) { }
}

export type FiltersActions = SetCityFilter | SetNeighborFilter;