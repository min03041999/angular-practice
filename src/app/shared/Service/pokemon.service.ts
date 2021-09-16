import { Injectable } from '@angular/core';
import { Pokemon } from '../Model/pokemon.model';
import data from '../../../assets/pokedex.json';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor() { }
  getPokemonList(): Observable<Pokemon[]> {
    return of(data.data);
  }

  updatePokemon(id: number | string): any {
    // console.log(data.data.find(p => p.id === id))
    return of(data.data.find(poke => poke.id === id))
  }


}
