import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityPhotoModule } from './entity-photo/entity-photo.module';
import { SearchModule } from './search/search.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EntityPhotoModule,
    SearchModule
  ],
  exports: [
    EntityPhotoModule,
    SearchModule
  ]
})
export class LayoutsModule { }
