import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemonlist',
  standalone: false,
  templateUrl: './pokemonlist.component.html',
  styleUrl: './pokemonlist.component.css'
})
export class PokemonlistComponent {
  persona: any[] = [{ nome: "antonio", cognome: "pisicchio", eta: 17 }, { nome: "giovanni", cognome: "bavuso", eta: 30 }];
  isOpen: boolean = false;
  
  open(){
    this.isOpen=!this.isOpen;
  }

}

