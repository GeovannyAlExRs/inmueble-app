import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Read } from '../store/inmueble/inmueble.store.actions';
import { InmuebleResponse } from '../store/inmueble/inmueble.store.interfaces';
import * as fromRoot from '@store/store'
import { getInmuebles, getLoading } from '../store/inmueble/inmueble.store.selectors';

@Component({
  selector: 'app-inmueble-list',
  templateUrl: './inmueble-list.component.html',
  styleUrls: ['./inmueble-list.component.scss']
})
export class InmuebleListComponent implements OnInit {

  //listBtn: { btn: Array<any> } = { btn: [] }

  loading$!: Observable<boolean | null>
  inmuebles$!: Observable<InmuebleResponse[] | null>

  searchInmueble: string = ''

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit(): void {

    this.store.dispatch(new Read())
    this.loading$ = this.store.pipe(select(getLoading))
    this.inmuebles$ = this.store.pipe(select(getInmuebles))
    console.log('INMUEBLES: ', this.inmuebles$);

  }

  receiveData(event: string): void {
    console.log('Estoy desde el padre: ', event);
    this.searchInmueble = event
  }
}
