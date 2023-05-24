import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndicatorsModule } from './indicators/indicators.module';
import { PopusModule } from './popus/popus.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IndicatorsModule,
    PopusModule
  ]
})
export class SharedModule { }
