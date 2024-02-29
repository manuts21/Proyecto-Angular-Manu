import { Component, Input } from '@angular/core';
import { Car } from '../types';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { lastPageSelector } from '../services/cars/selectors/cars.selectors';
import { DialogService, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CalendarComponent } from '../calendar/calendar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cars-list',
  standalone: true,
  imports: [CardModule, ButtonModule, DynamicDialogModule,CommonModule],
  templateUrl: './cars-list.component.html',
  styleUrl: './cars-list.component.css',
  providers: [DialogService]
})
export class CarsListComponent {
  ref : DynamicDialogRef | undefined;

  constructor(private router: Router, private store: Store, public dialogService: DialogService) {}

  @Input('cars') cars?: Car[] | undefined;

  seeDetails(id: string) {
    this.router.navigate(['/car', id]);
  }
  show(event: Event) {
    event.stopPropagation();
    this.ref = this.dialogService.open(CalendarComponent, {
      header: 'Select a Date',
      width: '40vw',
  });
}
}

