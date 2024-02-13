
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { skip } from 'rxjs';
import { CarsListComponent } from './cars-list/cars-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,HttpClientModule,CarsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Proyecto-Angular-Manu';
  cars = [];
  constructor(private http:HttpClient){

  }
  ngOnInit(): void {
    this.http.get<any>('https://dm-assignment-commonshare.koyeb.app/api/cars')
      .subscribe(data => {
        this.cars = data.data
        console.log(this.cars)
      });
  }
}


