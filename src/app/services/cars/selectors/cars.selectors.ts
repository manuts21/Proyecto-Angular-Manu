import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as carsState from '../reducers/cars.reducer';
export const selectCarsState = createFeatureSelector<carsState.State>(
  carsState.carsFeatureKey
);

export const carsSelector = createSelector(
  selectCarsState,
  (state) => (state ? (state.cars ? state.cars : []) : [])
);

export const lastPageSelector = createSelector(
  selectCarsState,
  (state) => (state.lastPage)
);

export const popularCarsSelector = createSelector(
  selectCarsState,
  (state) => (state.popularCars)
);


