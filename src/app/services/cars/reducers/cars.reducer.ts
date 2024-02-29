import { createReducer, on } from '@ngrx/store';
import { carsActions } from '../actions/cars-actions';
import { Car } from '../../../types';

export const carsFeatureKey = 'cars';

export interface State {
  cars: Car[];
  lastPage: boolean;
  popularCars: Car[];
  lastSearch: string;
  reservations: any;
}

export const initialState: State = {
  cars: [],
  lastPage: false,
  popularCars: [],
  lastSearch: '',
  reservations: [],
};

export const carsReducer = createReducer(
  initialState,
  on(carsActions.getCars, (state, cars) => ({
    ...state,
    cars: cars.data,
    lastPage: cars.lastPage === cars.page,
  })),
  on(carsActions.addCars, (state, cars) => ({
    ...state,
    cars: state.cars.concat(cars.data),
    lastPage: cars.lastPage === cars.page,
  })),
  on(carsActions.getPopularCars, (state, cars) => ({
    ...state,
    popularCars: cars.data,
  })),
  on(carsActions.setLastSearch, (state, search) => ({
    ...state,
    lastSearch: search.data,
  })),
  on(carsActions.reservations, (state, reservations) => ({
    ...state,
    reservations: state.reservations.concat(reservations.data),
  }))
);
