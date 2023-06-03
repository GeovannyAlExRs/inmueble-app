import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InmuebleFormComponent } from './inmueble-form.component';

const routes: Routes = [
  { path: '', component: InmuebleFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InmuebleFormRoutingModule { }
