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

  constructor(private actions: Actions, private httpClient: HttpClient,
              private notification: NotificationService, private router: Router) {}

  // TODO: Register new Inmueble...
  create: Observable<Action> = createEffect(() =>
    this.actions.pipe(
      ofType(fromActions.Types.CREATE),
      map((action: fromActions.Create) => action.inmueble),
      switchMap((request: InmuebleCreateRequest) =>
        this.httpClient.post<InmuebleResponse>(`${environment.url}gateway/inmueble`, request)
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

  // TODO: Read new Inmueble...
  read: Observable<Action> = createEffect(() =>
    this.actions.pipe(
      ofType(fromActions.Types.READ),
      switchMap(() =>
        this.httpClient.get<InmuebleResponse[]>(`${environment.url}gateway/inmueble`)
        .pipe(
          delay(2000),
          map((inmuebles: InmuebleResponse[]) => new fromActions.ReadSuccess(inmuebles)),
          catchError(err => of(new fromActions.ReadError(err.message)))
        )
      )
    )
  )
}
