import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class PokemonSearchComponent implements OnInit {
  searchName = '';
  @Output() search = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  searchPokemon() {
    console.log(this.searchName)
    this.search.emit(this.searchName.toLowerCase())
  }

}
