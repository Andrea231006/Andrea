import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PokemonlistComponent } from './pokemon/pokemonlist/pokemonlist.component';
import { NavbarComponent } from './structures/navbar/navbar.component';
import { LampadineComponent } from './lampadine/lampadine.component';
import { LampadinaComponent } from './lampadina/lampadina.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PokemonlistComponent,
    NavbarComponent,
    LampadineComponent,
    LampadinaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    FormsModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
