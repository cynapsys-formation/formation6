import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') highlightColor: string;

  constructor(private el: ElementRef,
              private renderer: Renderer2) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(this.highlightColor, true);

  }

  private highlight(color: string, rm: boolean = false) {
    // this.el.nativeElement.style.backgroundColor = color;
    if (rm) {
      this.renderer.removeClass(this.el.nativeElement, color);
    } else {
      this.renderer.addClass(this.el.nativeElement, color);

    }
  }
}
