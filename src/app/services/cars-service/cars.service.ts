import { Injectable } from '@angular/core';
import axios from 'axios';
import { AllCars, Car, CarDetails } from '../../types';
import { Store } from '@ngrx/store';
import { carsActions } from '../cars/actions/cars-actions';
import { carsSelector, popularCarsSelector } from '../cars/selectors/cars.selectors';

const URL_BASE = '/api';
const URL_CARS = `${URL_BASE}/cars`;
const URL_CARS_POPULAR = `${URL_CARS}/popular`;

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  public cars: Car[] = [];
  public popularCars: Car[] = [];

  $cars = this.store.select(carsSelector);
  $popularCars = this.store.select(popularCarsSelector);

  constructor(private store: Store) {
    this.$cars.subscribe((car) => {
      this.cars = car ? car : [];
    });
    this.$popularCars.subscribe((car) => {
      this.popularCars = car ? car : [];
    });
  }
  async getAllCars(text: string, page: number) {
    const res = axios.get(URL_CARS, {
      params: { q: text, page },
    });
    const a = (await res).data;
    console.log(a.data);
    return a;
  }
  async getCars(text: string, page: number) {
    const a = await this.getAllCars(text, page);
    this.store.dispatch(
      carsActions.getCars({ data: a.data, page, lastPage: a.meta.last_page })
    );
  }
  async getPopularCars() {
    const { data } = await axios.get(URL_CARS_POPULAR);
    this.store.dispatch(carsActions.getPopularCars({ data }));
  }
  async getCarDetails(id: string) {
    const { data } = await axios.get(`${URL_CARS}/${id}`);
    return data;
  }
  async getMoreCars(text: string) {
    console.log(this.cars.length);
    let page = this.cars.length / 8 + 1;
    console.log(page);
    const a = await this.getAllCars(text, page);
    console.log(page, a.meta.last_page);
    this.store.dispatch(
      carsActions.addCars({ data: a.data, page, lastPage: a.meta.last_page })
    );
  }
}
