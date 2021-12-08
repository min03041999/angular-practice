import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonFormComponent } from './components/pokemon-form/pokemon-form.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonsComponent } from './pokemons.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonsComponent,
    children: [
      {
        path: '',
        component: PokemonListComponent,
      },
      {
        path: 'detail/:id',
        component: PokemonDetailComponent,
      },
      {
        path: 'add',
        component: PokemonFormComponent,
      },
      {
        path: 'edit/:id',
        component: PokemonFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonsRoutingModule {}
