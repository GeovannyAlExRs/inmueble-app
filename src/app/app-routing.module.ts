import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'auth', loadChildren: () => import('@modules/pages/auth/auth.module').then(m=>m.AuthModule) },
      { path: 'static', loadChildren: () => import('@modules/pages/static/static.module').then(m=>m.StaticModule) },
      { path: 'inmueble', loadChildren: () => import('@modules/pages/inmueble/inmueble.module').then(m=>m.InmuebleModule) },
      { path: '', pathMatch:'full', redirectTo: 'static/home' }
    ]
  },
  { path: '**', pathMatch:'full', redirectTo: 'static/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
