import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { Observable, of } from "rxjs";

import { NotificationService } from "@services/notification/notification.service";

import { environment } from "@env/environment";

import { UsersResponse } from "@store/users/users.store.interfaces";
import * as fromActions from "@store/users/users.store.actions";


type Action = fromActions.All;

@Injectable()
export class UserEffects {

  constructor(private httpclient: HttpClient, private actions: Actions,
              private notification: NotificationService, private router: Router) {}

  // TODO: Register new User...
  signUpEmail: Observable<Action> = createEffect(() =>
  this.actions.pipe(
    ofType(fromActions.Types.SIGN_UP_EMAIL), // Define excuse of the transaction
    map((action: fromActions.SignUpEmail) => action.user), // Map from Backend User
    switchMap( userData =>
      this.httpclient.post<UsersResponse>(`${environment.url}api/authentication/sign-up`, userData) // invoce la URL
      .pipe(
        tap((response: UsersResponse) => {
          localStorage.setItem('token', response.token)
          this.router.navigate(['/'])
        }),
        map((response: UsersResponse) => new fromActions.SignUpEmailSuccess(response.email, response || null)),
        catchError(err => {
          this.notification.error("Error al registrar un nuevo usuario.")
          return of(new fromActions.SignUpEmailError(err.message))
        })
      )
    )
  ))

  // TODO: Login User...
  signInEmail: Observable<Action> = createEffect(() =>
  this.actions.pipe(
    ofType(fromActions.Types.SIGN_IN_EMAIL), // Define excuse of the transaction
    map((action: fromActions.SignInEmail) => action.credentials), // Map from Backend User
    switchMap( userData =>
      this.httpclient.post<UsersResponse>(`${environment.url}api/authentication/sign-in`, userData) // invoce la URL
      .pipe(
        tap((response: UsersResponse) => {
          localStorage.setItem('token', response.token)
          this.router.navigate(['/'])
        }),
        map((response: UsersResponse) => new fromActions.SignInEmailSuccess(response.email, response || null)),
        catchError(err => {
          this.notification.error("Error al iniciar session.")
          return of(new fromActions.SignInEmailError(err.message))
        })
      )
    )
  ))

  // TODO: User it is login
  init: Observable<Action> = createEffect(() =>
  this.actions.pipe(
    ofType(fromActions.Types.INIT), // Define excuse of the transaction
    switchMap( async () => localStorage.getItem('token')), // Get Token
    switchMap( token => {
      if(token) {
        return this.httpclient.get<UsersResponse>(`${environment.url}api/users`) // invoce la URL
        .pipe(
          tap((response: UsersResponse) => {
            console.log('BACKEND => DATA USER: ', response);

          }),
          map((response: UsersResponse) => new fromActions.InitAuthorized(response.email, response || null)),
          catchError(err => {
            // this.notification.error("Error al iniciar session.")
            return of(new fromActions.InitError(err.message))
          })
        )
      } else {
        return of(new fromActions.InitUnAuthorized())
      }
    }
    )
  ))
}
