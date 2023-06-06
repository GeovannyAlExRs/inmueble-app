import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inmueble-form',
  templateUrl: './inmueble-form.component.html',
  styleUrls: ['./inmueble-form.component.scss']
})
export class InmuebleFormComponent implements OnInit {

  loading$!: Observable<boolean | null>
  photoLoaded!: string

  constructor() {}

  ngOnInit(): void {}

  saveInmueble(form: NgForm) : void {

  }

  onFilesImg(url: any) : void {
    if(url) {
      this.photoLoaded = url
      //console.log('URL', this.photoLoaded);
    }
  }
}
