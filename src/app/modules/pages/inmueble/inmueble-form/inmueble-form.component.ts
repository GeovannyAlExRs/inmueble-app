import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Create } from '@modules/pages/inmueble/store/inmueble/inmueble.store.actions'
import { InmuebleCreateRequest } from '@modules/pages/inmueble/store/inmueble/inmueble.store.interfaces'
import { getLoading } from '@modules/pages/inmueble/store/inmueble/inmueble.store.selectors'
import * as fromRoot from '@modules/pages/inmueble/store/inmueble.store'

@Component({
  selector: 'app-inmueble-form',
  templateUrl: './inmueble-form.component.html',
  styleUrls: ['./inmueble-form.component.scss']
})
export class InmuebleFormComponent implements OnInit {

  loading$!: Observable<boolean | null>
  photoLoaded!: string

  constructor(private store: Store<fromRoot.InmuebleListState>) {}

  ngOnInit(): void {}

  saveInmueble(form: NgForm) : void {
    if(form.valid) {
      this.loading$ = this.store.pipe(select(getLoading))

      const inmuebleCreateRequest : InmuebleCreateRequest = {
        name: form.value.name,
        address: form.value.address,
        price: Number(form.value.price),
        photo: this.photoLoaded
      }

      this.store.dispatch(new Create(inmuebleCreateRequest))
    }
  }

  onFilesImg(url: any) : void {
    if(url) {
      this.photoLoaded = url
      //console.log('URL', this.photoLoaded);
    }
  }
}
