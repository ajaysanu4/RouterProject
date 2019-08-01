import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-engine',
  templateUrl: './engine.component.html',
  styleUrls: ['./engine.component.css']
})
export class EngineComponent implements OnInit {

  ChasisNumber:string;
  CC:Number;
  abs:boolean=true;

  @Input() bikeModel: any;
  
  constructor() { 
    this.ChasisNumber="1AB23C3";
    this.CC=390;
  }

  ngOnInit() {
  }

ngOnChanges(changes: SimpleChanges): void {
  //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //Add '${implements OnChanges}' to the class.
  console.log("Inside engine onchanges")
  let model=changes.bikeModel;
  if(model.previousValue!=model.currentValue)
  {
    console.log("The value has been changed from "+model.previousValue+ "  to "+model.currentValue)
  }
  
}
ngOnDestroy(): void {
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.
  console.log("Inside DOM destroy ngOndestroy Method")
}
}
