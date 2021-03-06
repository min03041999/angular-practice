import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../shared/Service/pokemon.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  like = 0;
  dislike = 0;
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.like.subscribe((data) => {
      this.like += data;
    });
    this.pokemonService.dislike.subscribe((data) => {
      this.dislike += data;
    });
  }
}
