import { Directive, ElementRef, Renderer, Input } from '@angular/core';

@Directive({ selector: '[renderers]' })
export class RendererDirective {
    @Input() renderers: string;
    constructor(private elem: ElementRef, private render: Renderer) {
    }
    ngOnInit(){
        this.render.setElementStyle(this.elem.nativeElement, 'color', 'blue');
        this.render.setElementStyle(this.elem.nativeElement, 'color', this.renderers); 
    }
}