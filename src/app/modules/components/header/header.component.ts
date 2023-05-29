import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  mainMenu: {
    defaultOptions: Array<any>, accessLink: Array<any>
  } = { defaultOptions: [], accessLink: [] }

  customOptions: Array<any> = []

  @Output() menuToggle = new EventEmitter<void>()

  constructor() {}

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/static/home']
      },
      {
        name: 'Register',
        icon: 'uil uil-user-square',
        router: ['/auth/register']
      },
      {
        name: 'Product',
        icon: 'uil uil-box',
        router: ['/', 'product']
      },
      {
        name: 'Contact',
        icon: 'uil uil-envelopes',
        router: ['/', 'contact']
      }
    ]

    this.mainMenu.accessLink = [
      {
        name: 'Nuevo items 1',
        icon: 'uil-plus-square'
      },
      {
        name: 'Nuevo items 2',
        icon: 'uil-heart-medical'
      }
    ]
  }

  menuToggleDispatch() : void {
    this.menuToggle.emit()
  }
}
