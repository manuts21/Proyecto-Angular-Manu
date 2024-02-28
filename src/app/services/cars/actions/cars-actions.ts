import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Car } from '../../../types';
export const carsActions = createActionGroup({
  source: 'cars',
  events: {
    getCars: props<{data:Car[], page: number, lastPage: number}>(),
    addCars: props<{data:Car[], page: number, lastPage: number}>(),
    getPopularCars: props<{data:Car[]}>(),
    setLastSearch: props<{data:string}>(),
  }
});
