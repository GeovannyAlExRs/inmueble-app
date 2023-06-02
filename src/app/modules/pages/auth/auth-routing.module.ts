import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnauthGuard } from '@core/guards/unauth/unauth.guard';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('@modules/pages/auth/pages/login/login.module').then(m => m.LoginModule),
    canActivate: [UnauthGuard] },
  { path: 'register', loadChildren: () => import('@modules/pages/auth/pages/register/register.module').then(m => m.RegisterModule),
    canActivate: [UnauthGuard] },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
