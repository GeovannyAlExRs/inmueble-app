import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {

  // Load Image Default
  @HostListener('error') handleError(): void {
    const elementNative = this.elementHost.nativeElement
    console.log('Imagen no encontrada', this.elementHost)
    elementNative.src = 'https://firebasestorage.googleapis.com/v0/b/inmueble-ec.appspot.com/o/img-static%2Fnot_found.png?alt=media&token=e7f21b6e-bf91-4870-be80-b244bcbfb4ca'
  }

  constructor(private elementHost: ElementRef) { }

}
