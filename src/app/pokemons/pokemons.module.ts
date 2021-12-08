import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsRoutingModule } from './pokemons-routing.module';

//Component
import { PokemonsComponent } from './pokemons.component';
import { PokemonSearchComponent } from './components/pokemon-search/pokemon-search.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonFormComponent } from './components/pokemon-form/pokemon-form.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    PokemonsComponent,
    PokemonSearchComponent,
    PokemonDetailComponent,
    PokemonListComponent,
    PokemonFormComponent
  ],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    FormsModule,
    MatDialogModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class PokemonsModule { }
