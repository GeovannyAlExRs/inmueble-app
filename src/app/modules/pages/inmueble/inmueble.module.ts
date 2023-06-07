import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InmuebleRoutingModule } from './inmueble-routing.module';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { effects, reducers } from './store/inmueble.store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InmuebleRoutingModule,

    StoreModule.forFeature('inmueble', reducers),
    EffectsModule.forFeature(effects)
  ]
})
export class InmuebleModule { }
