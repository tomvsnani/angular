import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeroComponent } from './hero/hero.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { MaincontentcardsComponent } from './maincontentcards/maincontentcards.component';
import { FormsModule } from '@angular/forms';
import { ShotsComponent } from './shots/shots.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
 
    HeroComponent,
      MaincontentComponent,
      MaincontentcardsComponent,
      ShotsComponent,
      HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
