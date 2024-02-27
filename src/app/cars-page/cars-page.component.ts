import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  carsSelector,
  lastPageSelector,
  popularCarsSelector,
} from '../services/cars/selectors/cars.selectors';
import { CarsService } from '../services/cars-service/cars.service';
import { Car } from '../types';
import { Store } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { CarsListComponent } from '../cars-list/cars-list.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cars-page',
  standalone: true,
  imports: [HttpClientModule, CarsListComponent, ButtonModule],
  templateUrl: './cars-page.component.html',
  styleUrl: './cars-page.component.css',
})
export class CarsPageComponent implements OnInit, OnDestroy {
  textoBuscar = '';

  $cars = this.store.select(carsSelector);
  cars: Car[] = [];
  $popularCars = this.store.select(popularCarsSelector);
  popularCars: Car[] = [];
  title = 'Proyecto-Angular-Manu';

  $lastPage = this.store.select(lastPageSelector);
  lastPage = false;

  subscriptions: Subscription = new Subscription();

  constructor(private carsService: CarsService, private store: Store) {
    this.subscriptions.add(
      this.$cars.subscribe(() => {
        this.cars = this.carsService.cars;
      })
    );
    this.subscriptions.add(
      this.$popularCars.subscribe(() => {
        this.popularCars = this.carsService.popularCars;
      })
    );
    this.subscriptions.add(
      this.$lastPage.subscribe((value) => {
        console.log(value);
        this.lastPage = value;
      })
    );
  }
  ngOnInit(): void {
    this.getCars('');
    this.getPopularCars();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
  async getCars(searchtext: string) {
    console.log(searchtext);
    this.textoBuscar = searchtext;
    this.carsService.getCars(searchtext, 1);
  }

  async getPopularCars() {
    this.carsService.getPopularCars();
  }

  async getMoreCars(searchtext: string) {
    this.carsService.getMoreCars(searchtext);
  }
}
