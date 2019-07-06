import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { PointsTableComponent } from './points-table/points-table.component';
import { UpcomingMatchesComponent } from './upcoming-matches/upcoming-matches.component';
import { NewsComponent } from './news/news.component';
import { RouterModule, Routes} from '@angular/router'

const route:Routes=[
  
    {path:'points',component:PointsTableComponent},
    {path:'news', component:NewsComponent},
    {path:'Upcommingmatches', component:UpcomingMatchesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PointsTableComponent,
    UpcomingMatchesComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
