import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css']
})
export class BikeComponent implements OnInit {
model:string= "KTM";
Type:string="With Gear";
abs:boolean=true;
show:boolean=true;


  constructor() { }

 toggle=()=>{
  this.show=!this.show;
 }
  ngOnInit() {
    console.log("Inside Ng Oninit")
  }
  

}
