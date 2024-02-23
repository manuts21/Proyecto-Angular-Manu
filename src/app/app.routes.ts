import { Routes } from '@angular/router';
import { CardetailsComponent } from './cardetails/cardetails.component';
import { CarsPageComponent } from './cars-page/cars-page.component';
export const routes: Routes = [
  { path: '', component: CarsPageComponent},
  { path: 'car/:id', component: CardetailsComponent },
];

