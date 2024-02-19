import { Component, EventEmitter, Output } from '@angular/core';



@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {
  @Output() search = new EventEmitter<string>();
  searchEnter(event: Event){
    const input = event.target as HTMLInputElement;
    this.search.emit(input.value);
  }
}
