import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonAddComponent } from './components/pokemon-add/pokemon-add.component';
import { PokemonEditComponent } from './components/pokemon-edit/pokemon-edit.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonsComponent } from './pokemons.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonsComponent,
    children: [
      {
        path: '',
        component: PokemonListComponent
      },
      {
        path: 'add',
        component: PokemonAddComponent
      },
      {
        path: 'edit/:id',
        component: PokemonEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonsRoutingModule { }
