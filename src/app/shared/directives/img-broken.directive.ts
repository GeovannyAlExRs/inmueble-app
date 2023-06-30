import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {

  // Load Image Default
  @HostListener('error') handleError(): void {
    const elementNative = this.elementHost.nativeElement
    console.log('Imagen no encontrada', this.elementHost)
    elementNative.src = '../../../assets/img/logo_inmueble.png'
  }

  constructor(private elementHost: ElementRef) { }

}
