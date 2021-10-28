import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClientListComponent } from '../shared/components/client-list/client-list.component';
import { ClientCardComponent } from '../shared/components/client-card/client-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    ClientCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
