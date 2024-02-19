import { Injectable } from '@angular/core';
import axios from 'axios';
import { AllCars, Car, CarDetails } from '../types';

const URL_BASE = '/api';
const URL_CARS = `${URL_BASE}/cars`;
const URL_CARS_POPULAR = `${URL_CARS}/popular`;

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  constructor() {}
  async getAllCars(text: string, page: number): Promise<AllCars> {
    const res = axios.get(URL_CARS, {
      params: { q: text, page },
    });
    return (await res).data;
  }
  async getPopularCars(): Promise<Car[]> {
    const { data } = await axios.get(URL_CARS_POPULAR);
    return data;
  }
  async getCarDetails(id: string): Promise<CarDetails> {
    const { data } = await axios.get(`${URL_CARS}/${id}`);
    return data;
  }
}
