import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { PokemonsComponent } from './pokemons.component';
import { PokemonSearchComponent } from './components/pokemon-search/pokemon-search.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PokemonsComponent,
    PokemonSearchComponent
  ],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    FormsModule
  ]
})
export class PokemonsModule { }
