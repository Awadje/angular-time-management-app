import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreaDetailComponent } from './components/area-detail/area-detail.component';
import { AreaListComponent } from './components/area-list/area-list.component';
import { WeekRosterComponent } from './components/week-roster/week-roster.component';
import { WeekSelectorComponent } from './components/week-selector/week-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    AreaDetailComponent,
    AreaListComponent,
    WeekRosterComponent,
    WeekSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
