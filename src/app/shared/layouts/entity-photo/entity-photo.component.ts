import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-entity-photo',
  templateUrl: './entity-photo.component.html',
  styleUrls: ['./entity-photo.component.scss']
})
export class EntityPhotoComponent implements OnInit {

  @Input() photoURL!: string

  constructor(private domSanitizer: DomSanitizer) {}

  ngOnInit(): void {

  }

  get safePhotoURL(): SafeStyle | null {
    return this.photoURL ? this.domSanitizer.bypassSecurityTrustStyle(`url(${this.photoURL})`) : null
  }
}
