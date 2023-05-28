import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [{path: 'static', loadChildren: () => import('@modules/pages/static/static.module').then(m=>m.StaticModule)}]
  },
  { path: '', pathMatch:'full', redirectTo: 'static/home' },
  { path: '**', pathMatch:'full', redirectTo: 'static/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
