import { Component, EventEmitter, Output } from '@angular/core';
import { CarsService } from '../services/cars-service/cars.service';



@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {
  constructor(private carsservice: CarsService) {}

  searchEnter(event: Event){
    const input = event.target as HTMLInputElement;
    this.carsservice.getCars(input.value, 1);
  }
}
