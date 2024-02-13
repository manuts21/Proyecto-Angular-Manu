import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cars-list',
  standalone: true,
  imports: [],
  templateUrl: './cars-list.component.html',
  styleUrl: './cars-list.component.css'
})
export class CarsListComponent {

  @Input('cars') cars?: any[];

}
