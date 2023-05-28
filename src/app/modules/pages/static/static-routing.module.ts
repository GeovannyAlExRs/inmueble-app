import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home', loadChildren: () => import('@modules/pages/static/pages/home/home.module').then(m => m.HomeModule)},
  {path: '404', loadChildren: () => import('@modules/pages/static/pages/not-found/not-found.module').then(m => m.NotFoundModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticRoutingModule { }
