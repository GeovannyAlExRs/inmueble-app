import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards/auth/auth.guard';

const routes: Routes = [
  { path: 'new', loadChildren: () => import('@modules/pages/inmueble/inmueble-form/inmueble-form.module').then(m => m.InmuebleFormModule),
    canActivate: [AuthGuard] },
  { path: 'list', loadChildren: () => import('@modules/pages/inmueble/inmueble-list/inmueble-list.module').then(m => m.InmuebleListModule),
    canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InmuebleRoutingModule { }
