import { Component, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RouterProject';
constructor(private _router:Router){
}


  NavigateToPoints=()=>{
    console.log("Inside Navigation button Event");
    this._router.navigate(["/points"])
  }
}
