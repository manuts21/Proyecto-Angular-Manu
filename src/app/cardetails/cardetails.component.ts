import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car, CarDetails } from '../types';
import { CarsService } from '../services/cars-service/cars.service';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-cardetails',
  standalone: true,
  imports: [CommonModule, CardModule],
  templateUrl: './cardetails.component.html',
  styleUrl: './cardetails.component.css',
})
export class CardetailsComponent implements OnInit {
  carId!: string;
  car!: CarDetails;

  defaultImage?: string;
  extraImage1?: string;
  extraImage2?: string;

  constructor(private route: ActivatedRoute, private carsService: CarsService) {
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
