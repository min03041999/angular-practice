import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Pokemon } from 'src/app/shared/Model/pokemon.model';
import { PokemonService } from 'src/app/shared/Service/pokemon.service';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons: Pokemon[] = [];
  pokemonnew: Pokemon[] = [];
  constructor(private pokemonService: PokemonService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getPokemonList()
  }

  getPokemonList() {
    this.pokemonService.getPokemonList().subscribe(pokemons => {
      this.pokemons = pokemons;
      this.pokemonnew = pokemons;
    })
  }

  //Search
  onSearch(data: string) {
    this.pokemons = this.pokemonnew.filter(news => {
      return news.name.english.toLowerCase().includes(data)
    })
    console.log(this.pokemons)
  }

  //Detail
  onDetail(pokemon: Pokemon) {
    this.dialog.open(PokemonDetailComponent, {
      data: pokemon,
      width: '400px'
    })
  }
}
