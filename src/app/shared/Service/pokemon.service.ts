import { Injectable } from '@angular/core';
import { Pokemon } from '../Model/pokemon.model';
import data from '../../../assets/pokedex.json';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }
  getPokemonList(): Observable<Pokemon[]>{
    const pokemons = of(data.data);
    return pokemons;
  }
}
