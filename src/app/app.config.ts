import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { StoreModule, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { carsReducer } from './services/cars/reducers/cars.reducer';
import { carsEffects } from './services/cars/effects/cars.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideStore({ cars: carsReducer }), provideEffects([carsEffects]), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })],
};
