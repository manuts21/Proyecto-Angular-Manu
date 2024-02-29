import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CalendarModule } from 'primeng/calendar';
import { carsActions } from '../services/cars/actions/cars-actions';


@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CalendarModule,ReactiveFormsModule,CommonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {

  @Input('car') car: any;
  constructor(private store: Store) {
   }
  calendarform = new FormGroup({
    date: new FormControl('', [Validators.required])
  });
  onSubmit() {
    this.store.dispatch(carsActions.reservations({ data: this.calendarform.value }));
  }

}
