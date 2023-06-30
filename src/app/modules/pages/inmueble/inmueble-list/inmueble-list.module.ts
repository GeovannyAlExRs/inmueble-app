import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { InmuebleListRoutingModule } from './inmueble-list-routing.module';
import { InmuebleListComponent } from './inmueble-list.component';
import { IndicatorsModule } from '@shared/indicators/indicators.module';
import { ImgBrokenModule } from '@shared/directives/img-broken.module';
import { SearchModule } from '@shared/pipe/search.module';
import { LayoutsModule } from '@shared/layouts/layouts.module';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    InmuebleListComponent
  ],
  imports: [
    CommonModule,
    InmuebleListRoutingModule,

    FlexLayoutModule,
    IndicatorsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,

    ImgBrokenModule,
    SearchModule,
    LayoutsModule
  ]
})
export class InmuebleListModule { }
