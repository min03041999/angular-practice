import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsRoutingModule } from './pokemons-routing.module';

//Component
import { PokemonsComponent } from './pokemons.component';
import { PokemonSearchComponent } from './components/pokemon-search/pokemon-search.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';


import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    PokemonsComponent,
    PokemonSearchComponent,
    PokemonDetailComponent
  ],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    FormsModule,
    MatDialogModule,
    MatIconModule
  ]
})
export class PokemonsModule { }
