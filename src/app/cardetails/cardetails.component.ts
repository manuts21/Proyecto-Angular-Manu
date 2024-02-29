import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car, CarDetails } from '../types';
import { CarsService } from '../services/cars-service/cars.service';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Subscription, timeout } from 'rxjs';
import { Store } from '@ngrx/store';
import { carsSelector } from '../services/cars/selectors/cars.selectors';
import { CarsListComponent } from '../cars-list/cars-list.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-cardetails',
  standalone: true,
  imports: [CommonModule, CardModule, CarsListComponent,ButtonModule],
  templateUrl: './cardetails.component.html',
  styleUrl: './cardetails.component.css',
})
export class CardetailsComponent implements OnInit {
  carId!: string;
  car!: CarDetails;

  defaultImage?: string;
  extraImage1?: string;
  extraImage2?: string;
  $cars = this.store.select(carsSelector);
  cars: Car[] = [];
  subscriptions: Subscription = new Subscription();

  constructor(private route: ActivatedRoute, private carsService: CarsService, private store: Store) {
    this.subscriptions.add(
      this.$cars.subscribe(() => {
        this.cars = this.carsService.cars;
      })
    );
    this.route.params.subscribe((params) => {
      this.carId = params['id'];
    });
  }

  ngOnInit(): void {
    this.getCar();
  }

  async getCar() {
    this.car = await this.carsService.getCarDetails(this.carId);
    this.defaultImage = this.car.img;
    this.extraImage1 = this.car.images[0].url;
    this.extraImage2 = this.car.images[1].url;
  }


  selectedImage: any;

  setSelectedImage = (url: string | undefined) => {
    if (url) this.selectedImage = url;
    else this.selectedImage = '';
  };
}
