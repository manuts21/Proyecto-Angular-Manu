import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { skip } from 'rxjs';
import { CarsListComponent } from './cars-list/cars-list.component';
import { AllCars, Car } from './types';
import axios from 'axios';
import { CarsService } from './cars-service/cars.service';
import { StoreModule } from '@ngrx/store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HttpClientModule, CarsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Proyecto-Angular-Manu';
  cars = [] as Car[];
  constructor(private carsService: CarsService) {}
  ngOnInit(): void {
    this.getCars('Toyota')

    // this.http
    //   .get<AllCars>('https://dm-assignment-commonshare.koyeb.app/api/cars')
    //   .subscribe((res) => {
    //     this.cars = res.data;
    //     console.log(this.cars);
    //   });

  }
  async getCars(searchtext: string){
    console.log(searchtext);
    let carsResult = await this.carsService.getAllCars(searchtext, 0);
    this.cars = carsResult.data;
    console.log(this.cars);
  }

}
