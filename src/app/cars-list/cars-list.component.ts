import { Component, Input } from '@angular/core';
import { Car } from '../types';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { lastPageSelector } from '../services/cars/selectors/cars.selectors';

@Component({
  selector: 'app-cars-list',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './cars-list.component.html',
  styleUrl: './cars-list.component.css',
})
export class CarsListComponent {

  constructor(private router: Router, private store: Store) {}

  @Input('cars') cars?: Car[] | undefined;

  seeDetails(id: string) {
    this.router.navigate(['/car', id]);
  }
}

