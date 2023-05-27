import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  @Output() menuToggleList = new EventEmitter<void>()

  menuList: { defaultOptions: Array<any>, accessLink: Array<any> } = { defaultOptions: [], accessLink: [] }

  constructor() {}

  ngOnInit(): void {
    this.menuList.accessLink = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/']
      },
      {
        name: 'Sign in',
        icon: 'uil uil-signin',
        router: ['/', 'login']
      },
      {
        name: 'Sign up',
        icon: 'uil uil-user-square',
        router: ['/', 'register']
      },
      {
        name: 'New Product',
        icon: 'uil uil-box',
        router: ['/', 'product']
      },
      {
        name: 'Contact',
        icon: 'uil uil-envelopes',
        router: ['/', 'contact']
      },
      {
        name: 'Sign out',
        icon: 'uil uil-signout',
        router: ['/', 'login']
      }
    ]
  }

  closeMenu() :void {
    this.menuToggleList.emit()
  }

}
