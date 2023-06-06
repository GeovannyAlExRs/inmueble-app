import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Observable, of } from 'rxjs'
import { catchError, delay, map, switchMap, tap } from 'rxjs/operators'

import { NotificationService } from '@services/notification/notification.service'

import * as fromActions from '@modules/pages/inmueble/store/inmueble/inmueble.store.actions'
import { InmuebleCreateRequest, InmuebleResponse } from './inmueble.store.interfaces'
import { environment } from '@env/environment'

type Action = fromActions.All

@Injectable()
export class SaveEffects {

  constructor(private actions: Actions, private httpclient: HttpClient,
              private notification: NotificationService, private router: Router) {}

  create: Observable<Action> = createEffect(() =>
    this.actions.pipe(
      ofType(fromActions.Types.CREATE),
      map((action: fromActions.Create) => action.inmueble),
      switchMap((request: InmuebleCreateRequest) =>
        this.httpclient.post<InmuebleResponse>(`${environment.url}gateway/inmueble`, request)
        .pipe(
          delay(1000),
          tap((response: InmuebleResponse) => {
            this.router.navigate(['inmueble/list'])
          }),
          map((inmueble: InmuebleResponse) => new fromActions.CreateSuccess(inmueble)),
          catchError( err => {
            this.notification.error(`ERROR, No se pudo guardar el inmueble: ${err.message}`)
            return of(new fromActions.CreateError(err.message))
          })
        )
      )
    )
  )
}
