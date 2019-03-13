import { AppState } from '..';
import { createSelector } from '@ngrx/store';
import { getFilters } from '../filters/filters.selectors';

export const getUnits = (state: AppState) => state.units;

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
          unit.address.neighborhood &&
          (!filter.city || filter.city === unit.address.city)
      )
      .map(unit => unit.address.neighborhood)
      .reduce(uniqueStringAccumulator, [])
);

export const getFilteredCities = createSelector(
  getUnits,
  getFilters,
  (units, filter) =>
    units.filter(
      unit =>
        (!filter.city || unit.address.city === filter.city) &&
        (!filter.neighborhood ||
          unit.address.neighborhood === filter.neighborhood)
    )
);
