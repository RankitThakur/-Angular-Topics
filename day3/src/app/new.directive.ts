import { Directive,HostListener,HostBinding} from '@angular/core';

@Directive({
  selector: '[appNew]'
})
export class NewDirective {

  constructor() { 
  }

  @HostBinding('style.backgroundColor') bgColor:any;
  @HostListener('mouseout') onMouseout(){
  this.bgColor = "blue"

  }
}