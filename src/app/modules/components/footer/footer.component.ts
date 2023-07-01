import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  menulink: { accessLink: Array<any> } = { accessLink: [] }

  year: number = new Date().getFullYear()

  developer: string = '<Geovanny_M/>'

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
      }
    ]
  }

}
