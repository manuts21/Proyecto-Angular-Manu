import { Component, Input } from '@angular/core';
import { Car } from '../types';
import { CardModule } from 'primeng/card';
import { Button, ButtonModule } from 'primeng/button'
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-cars-list',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './cars-list.component.html',
  styleUrl: './cars-list.component.css'
})
export class CarsListComponent {

  @Input('cars') cars?: Car[];

}
