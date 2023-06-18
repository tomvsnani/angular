import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShotsComponent } from './shots/shots.component';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'shots/:id',component:ShotsComponent},
  {path:'',component:HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
