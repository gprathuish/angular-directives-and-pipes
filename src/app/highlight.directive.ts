import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }
  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor(this.hightlightColor || 'yellow');
  }

  @HostListener('mouseleave') onmouseleave() {
    this.changeColor(null);
  }

  @Input('appHighlight') hightlightColor: string;

  private changeColor(color){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
