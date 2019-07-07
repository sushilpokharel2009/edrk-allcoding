import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[red]',
})
export class Red {
  constructor(el: ElementRef) {
    el.nativeElement.style.color = 'red';
  }
}