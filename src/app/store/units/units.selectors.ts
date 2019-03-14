import { AppState } from '..';
import { createSelector } from '@ngrx/store';
import { getFilters } from '../filters/filters.selectors';

export const getUnitState = (state: AppState) => state.unitsState;

export const getUnits = createSelector(
  getUnitState,
  state => state.units
);

export const getUnitsTotalNumber = createSelector(
  getUnitState,
  state => state.totalElements
);

export const getUnit = createSelector(
  getUnits,
  (units, props) => units.find(unit => unit.id === props.unitId)
);

const uniqueStringAccumulator = (acc, text) =>
  acc.concat(acc.includes(text) ? [] : [text]);

export const getCities = createSelector(
  getUnits,
  units =>
    units
      .filter(unit => unit.address.city)
      .map(unit => unit.address.city)
      .reduce(uniqueStringAccumulator, [])
);

export const getNeighborhoods = createSelector(
  getUnits,
  getFilters,
  (units, filter) =>
    units
      .filter(
        unit =>
          unit.address.borough &&
          (!filter.city || filter.city === unit.address.city)
      )
      .map(unit => unit.address.borough)
      .reduce(uniqueStringAccumulator, [])
);

export const getFilteredCities = createSelector(
  getUnits,
  getFilters,
  (units, filter) =>
    units.filter(
      unit =>
        (!filter.city || unit.address.city === filter.city) &&
        (!filter.neighborhood || unit.address.borough === filter.neighborhood)
    )
);
