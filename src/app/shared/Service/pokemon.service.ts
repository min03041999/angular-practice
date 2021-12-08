import { Injectable } from '@angular/core';
import { Pokemon } from '../Model/pokemon.model';
import data from '../../../assets/pokedex.json';
import { Observable, Subject, of, throwError, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private REST_API_SERVER = 'https://pokeapi.co/api/v2/type';
  public like = new Subject<number>();
  public dislike = new Subject<number>();

  constructor(private router: Router, private httpClient: HttpClient) {}
  getPokemonList(): Observable<Pokemon[]> {
    return of(data.data);
  }

  getCategory(): Observable<any> {
    return this.httpClient.get<any>(this.REST_API_SERVER).pipe(
      map((res) => {
        return res.results;
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  findPokemonById(id: number) {
    return of(data.data.find((p) => p.id === id));
  }

  updatePokemon(id: number): any {
    return of(data.data.find((p) => p.id === id));
  }

  nextPokemon(id: number) {
    this.router.navigate(['/pokemons/detail', Number(id) + 1]);
  }

  previousPokemon(id: number) {
    this.router.navigate(['/pokemons/detail', Number(id) - 1]);
  }

  likePokemon(like: number) {
    this.like.next(like);
  }

  dislikePokemon(dislike: number) {
    this.dislike.next(dislike);
  }
}
