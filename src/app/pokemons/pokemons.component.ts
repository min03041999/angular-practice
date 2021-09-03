import { Component, OnInit } from '@angular/core';
import { Pokemon } from './shared/pokemon.model';
import { PokemonService } from './shared/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  pokemons: Pokemon[] = [];
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemonList()
  }

  getPokemonList() {
    this.pokemonService.getPokemonList().subscribe(pokemons => this.pokemons = pokemons)
  }
}
