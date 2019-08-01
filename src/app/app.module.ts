import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { PointsTableComponent } from './points-table/points-table.component';
import { UpcomingMatchesComponent } from './upcoming-matches/upcoming-matches.component';
import { NewsComponent } from './news/news.component';
import { RouterModule, Routes} from '@angular/router';
import { WorldCupComponent } from './world-cup/world-cup.component';
import { IPLComponent } from './ipl/ipl.component';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { BikeComponent } from './bike/bike.component';
import { EngineComponent } from './engine/engine.component';
import { FormsModule } from '@angular/forms';

const route:Routes=[
  
    {path:'points',component:PointsTableComponent,
    children:[
    {path:'worldcup', component:WorldCupComponent},
    {path:'IPL',component:IPLComponent}]},
    {path:'news', component:NewsComponent},
    {path:'Upcommingmatches', component:UpcomingMatchesComponent},
    {path:'bike',component:BikeComponent},
    {path:'engine',component:EngineComponent},
    {path:"**", redirectTo:'news'}
]

@NgModule({
  declarations: [
    AppComponent,
    PointsTableComponent,
    UpcomingMatchesComponent,
    NewsComponent,
    WorldCupComponent,
    IPLComponent,
    CustomDirectiveDirective,
    BikeComponent,
    EngineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
