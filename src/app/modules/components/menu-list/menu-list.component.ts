import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersResponse } from '@store/users/users.store.interfaces';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  menuList: { accessLink: Array<any> } = { accessLink: [] }

  @Output() menuToggle = new EventEmitter<void>()
  @Output() signOut = new EventEmitter<void>()
  @Input() isAuthorized!: boolean | null
  @Input() users!: UsersResponse | null

  constructor() {}

  ngOnInit(): void {
    this.menuList.accessLink = [
      { name: 'Home', icon: 'uil uil-estate', router: ['/static/home'], band: !this.isAuthorized },
      { name: 'Sign in', icon: 'uil uil-signin', router: ['/auth/login'], band: this.isAuthorized },
      { name: 'Sign up', icon: 'uil uil-user-square', router: ['/auth/register'], band: this.isAuthorized },
      { name: 'New Inmueble', icon: 'uil uil-box', router: ['/inmueble/new'], band: !this.isAuthorized },
      { name: 'List Inmueble', icon: 'uil uil-box', router: ['/inmueble/list'], band: !this.isAuthorized },
      { name: 'Contact', icon: 'uil uil-envelopes', router: ['/contact'] },
      { name: 'Sign out', icon: 'uil uil-signout', router: ['/auth/login'], band: !this.isAuthorized }
    ]
  }

  closeMenu() :void {
    this.menuToggle.emit()
  }

  logoutUser(menu: string): void {
    if(menu === 'Sign out') {
      this.signOut.emit()
      //console.log('Menu: SOY', menu)
    }
  }
}
