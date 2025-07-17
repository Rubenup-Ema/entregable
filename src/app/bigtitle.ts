import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBigtitle]'
})
export class Bigtitle {

  constructor(private el: ElementRef, private renderer: Renderer2) { }


  ngOnInit() {


    this.renderer.setStyle(this.el.nativeElement, 'font-size', '20px');
    this.renderer.setStyle(this.el.nativeElement, 'background-color','lightgray');
    this.renderer.setStyle(this.el.nativeElement, 'color','white');

  }

}
