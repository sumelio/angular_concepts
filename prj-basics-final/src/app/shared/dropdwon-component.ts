import {
  Directive,
  Input,
  HostBinding,
  ElementRef,
  Renderer2,
  HostListener,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective  implements OnInit {
  @Input() defaultColor = 'transparent';
  @Input() highlightColor = 'pink';

  private openClass = 'open';
  private defaultClass = 'dropdown';
  @HostBinding('class') classes = this.defaultClass;
//   @HostBinding('style.backgroundColor') backgroundColor = 'transparent';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
    this.renderer.addClass(this.elementRef.nativeElement, 'open');
    this.renderer.removeClass(this.elementRef.nativeElement, 'open');
  }

//   @HostListener('mouseover') mouseOver(eventData: Event) {
//     // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
//     this.backgroundColor = this.highlightColor;
//   }

//   @HostListener('mouseleave') mouseleave(eventData: Event) {
//     // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
//     this.backgroundColor = this.defaultColor;
//   }


  // tslint:disable-next-line:whitespace
  @HostListener('click', ['$event.target'])
  click(eventData: Event) {
    if (this.classes.includes(this.openClass)) {
      this.classes = this.defaultClass;
    } else {
      this.classes = `${this.defaultClass} ${this.openClass}`;
    }
  }
}
