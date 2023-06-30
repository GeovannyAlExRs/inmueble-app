import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgBrokenDirective } from './img-broken.directive';



@NgModule({
  declarations: [
    ImgBrokenDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImgBrokenDirective
  ]
})
export class ImgBrokenModule { }
