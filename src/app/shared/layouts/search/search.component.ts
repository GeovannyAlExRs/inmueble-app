import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() callbackData: EventEmitter<any> = new EventEmitter()

  searchInmueble: string = ''

  constructor() { }

  ngOnInit(): void { }

  callSearch(valor: any): void {
    if(valor.length >= 3) {
      this.callbackData.emit(valor)
    } else {
      this.callbackData.emit(valor)
    }
  }
}
