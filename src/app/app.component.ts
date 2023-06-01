import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NotificationService } from './services/notification/notification.service';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromRoot from '@store/store'
import { getUser, getIsAuthorized } from '@store/users/users.store.selectors'
import { UsersResponse } from '@store/users/users.store.interfaces'
import { Init ,SignOutEmail } from '@store/users/users.store.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showSpinner = false;
  title = 'inmueble-app';

  users$!: Observable<UsersResponse>
  isAuthorized$!: Observable<boolean>

  constructor(private firebase: AngularFirestore, private notificationService: NotificationService,
              private store: Store<fromRoot.State>, private router: Router) {}

  ngOnInit(): void {
    /*this.firebase.collection("test").stateChanges().subscribe(data => {
      console.log(data.map(users => users.payload.doc.data()))
    })*/
    this.users$ = this.store.pipe(select(getUser)) as Observable<UsersResponse>
    this.isAuthorized$ = this.store.pipe(select(getIsAuthorized)) as Observable<boolean>

    console.log('USER: ', this.users$);

    //this.store.dispatch(new Init())
  }

  onToggleSpinner() : void {
    this.showSpinner = !this.showSpinner
  }

  onFilesChange(urls: string | string[]) :void {
    console.log('URLS: ', urls);
  }

  onSuccess() : void {
    this.notificationService.success("El procedimiento fue CORRECTO")
  }

  onError() : void {
    this.notificationService.error("El procedimiento fue INCORRECTO")
  }

  logoutUser(): void {
    //console.log('main app: ', main);
    localStorage.removeItem('token')
    this.store.dispatch(new SignOutEmail())
    this.router.navigate(['/auth/login'])
  }
}
