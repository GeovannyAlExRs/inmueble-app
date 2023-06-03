import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InmuebleFormRoutingModule } from './inmueble-form-routing.module';
import { InmuebleFormComponent } from './inmueble-form.component';


@NgModule({
  declarations: [
    InmuebleFormComponent
  ],
  imports: [
    CommonModule,
    InmuebleFormRoutingModule
  ]
})
export class InmuebleFormModule { }
