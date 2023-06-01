import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import * as fromRoot from '@store/store'
import { Store } from '@ngrx/store';
import { EmailPasswordCredentials } from '@store/users/users.store.interfaces'
import { SignInEmail } from '@store/users/users.store.actions'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading$!: Observable<boolean | null>

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit(): void {

  }

  loginUser(form: NgForm) : void {
    const userLoginRequest: EmailPasswordCredentials = {
      email: form.value.email,
      password: form.value.password
    }

    this.store.dispatch(new SignInEmail(userLoginRequest))
    console.log("STORE: ", this.store);
  }
}
