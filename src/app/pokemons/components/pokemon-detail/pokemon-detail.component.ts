import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/shared/Model/pokemon.model';
import { PokemonService } from 'src/app/shared/Service/pokemon.service';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css'],
})
export class PokemonDetailComponent implements OnInit {
  pokemon!: Pokemon;
  id: any;
  constructor(
    private pokemonService: PokemonService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getPokemonDetail();
  }

  getPokemonDetail() {
    this.activatedRoute.params.subscribe((data) => {
      this.id = Number(data.id);
      this.pokemonService.findPokemonById(this.id).subscribe((data: any) => {
        this.pokemon = data;
      });
    });
  }

  //Next
  nextPokemon(id: number) {
    this.pokemonService.nextPokemon(id);
  }
  //Previous
  previousPokemon(id: number) {
    this.pokemonService.previousPokemon(id);
  }

  clickLike() {
    this.pokemonService.likePokemon(1);
  }

  clickDislike() {
    this.pokemonService.dislikePokemon(1);
  }
}
