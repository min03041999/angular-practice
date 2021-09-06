import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../shared/Model/pokemon.model';
import { PokemonService } from '../shared/Service/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  pokemons: Pokemon[] = [];
  pokemonnew: Pokemon[] = [];
  constructor(private pokemonService: PokemonService) { }

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
}
