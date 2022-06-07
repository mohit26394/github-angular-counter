import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBgChange]',
})
export class BgChangeDirective {
  count = 0;
  constructor(private eleRef: ElementRef) {}

  @HostListener('click') onClick() {
    this.count++;
    if (this.count >= 10) {
      this.highlight('red');
    }
  }

  private highlight(color: string) {
    console.log(this.eleRef.nativeElement.parentNode);
    this.eleRef.nativeElement.style.background = color;
  }
}
