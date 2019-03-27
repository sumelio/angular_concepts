import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  @Input() highlightColor = 'pink';
@HostBinding('style.backgroundColor') backgroundColor = 'transparent';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

   ngOnInit(): void {
     // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
     this.renderer.addClass(this.elementRef.nativeElement, 'open');
     this.renderer.removeClass(this.elementRef.nativeElement, 'open');
}

@HostListener('mouseover') mouseOver(eventData: Event) {
  // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
  this.backgroundColor = this.highlightColor;
}

@HostListener('mouseleave') mouseleave(eventData: Event) {
  // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
  this.backgroundColor = this.defaultColor;
}

}
