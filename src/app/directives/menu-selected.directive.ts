import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appMenuSelected]'
})
export class MenuSelectedDirective {

  constructor() { }

  @HostListener('click') onClick() {
  }
}
