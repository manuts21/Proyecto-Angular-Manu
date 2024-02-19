import { Component, EventEmitter, Output } from '@angular/core';
import { SearchbarComponent } from '../searchbar/searchbar.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
searchEventHeader(str: string){
  console.log('searchEventHeader');
  this.search.emit(str);
}
@Output() search = new EventEmitter<string>();
}
