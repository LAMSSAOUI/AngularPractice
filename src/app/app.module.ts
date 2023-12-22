import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeTachesComponent } from './components/liste-taches/liste-taches.component';
import { NouvelleTacheComponent } from './components/nouvelle-tache/nouvelle-tache.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeTachesComponent,
    NouvelleTacheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
