import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  constructor(private _ref:ElementRef) { 
    // _ref.nativeElement.outerText="We have learnt Angular";
    console.log(_ref);
   // _ref.nativeElement.style.display = "none";
   
   _ref.nativeElement.style.cursor  = "pointer";
  }
@HostListener("click")
custom=()=>{
  console.log("clicked");
  this._ref.nativeElement.style.fontFamily  = "Broadway";
  
}

@HostListener("mouseover")
custom1=()=>{
  console.log("mouseovered");
  this._ref.nativeElement.style.color  = "red";
}
@HostListener("mouseleave")
custom2=()=>{
  console.log("mouseovered");
  this._ref.nativeElement.style.color  = "black";
}
}
