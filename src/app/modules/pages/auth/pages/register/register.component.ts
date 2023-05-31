import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store, select } from '@ngrx/store';

import { UserCreateRequest } from '@store/users/users.store.interfaces'
import { getLoading } from '@store/users/users.store.selectors'
import { SignUpEmail } from '@store/users/users.store.actions'
import * as fromRoot from '@store/store'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  logind$!: Observable<boolean | null>

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit(): void {
    this.logind$ = this.store.pipe(select(getLoading))
  }

  registerUser(form: NgForm) : void {
    if(form.valid) {
      const userCreateRequest: UserCreateRequest = {
        firstname: form.value.firstname,
        lastname: form.value.lastname,
        username: form.value.username,
        phone: form.value.phone,
        email: form.value.email,
        password: form.value.password
      }

      this.store.dispatch(new SignUpEmail(userCreateRequest))
    }
  }
}
