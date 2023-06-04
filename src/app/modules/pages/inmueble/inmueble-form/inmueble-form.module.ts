import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';

import { InmuebleFormRoutingModule } from './inmueble-form-routing.module';
import { InmuebleFormComponent } from './inmueble-form.component';

import { IndicatorsModule } from '@shared/indicators/indicators.module';
import { PopusModule } from '@shared/popus/popus.module';
import { EntityPhotoModule } from '@shared/layouts/entity-photo/entity-photo.module';



@NgModule({
  declarations: [
    InmuebleFormComponent
  ],
  imports: [
    CommonModule,
    InmuebleFormRoutingModule,

    FormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    IndicatorsModule,
    PopusModule,
    EntityPhotoModule,
  ]
})
export class InmuebleFormModule { }
