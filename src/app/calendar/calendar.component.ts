import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';


@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CalendarModule,ReactiveFormsModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {

  @Input('car') car: any;

  calendarform = new FormGroup({
    date: new FormControl('')
  })

}
