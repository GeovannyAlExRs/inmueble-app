import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  menulink: { accessLink: Array<any> } = { accessLink: [] }

  constructor() {}

  ngOnInit(): void {
    this.menulink.accessLink = [
      {
        name: 'Facebook',
        icon: 'uil uil-facebook-f',
        link: 'https://www.facebook.com/geovanny.alex.mr'
      },
      {
        name: 'Github',
        icon: 'uil uil-github',
        link: 'https://github.com/GeovannyAlExRs'
      },
      {
        name: 'Linkedin',
        icon: 'uil uil-linkedin',
        link: 'https://www.linkedin.com/in/geovanny-magallan-59ab5b99',
      },
      {
        name: 'Geovanny',
        icon: 'uil uil-link',
        link: ['GeovannyAlexRs']
      }
    ]

  }

}
