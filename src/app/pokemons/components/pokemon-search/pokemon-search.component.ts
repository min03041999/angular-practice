import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, take } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css'],
})
export class PokemonSearchComponent implements OnInit {
  // searchName = '';

  @Output() search = new EventEmitter<string>();
  myControl = new FormControl();
  constructor() {}

  ngOnInit(): void {
    this.myControl.valueChanges.pipe(debounceTime(1000)).subscribe((res) => {
      this.search.emit(res);
    });
  }

  // searchPokemon() {
  //   console.log(this.searchName)
  //   this.search.emit(this.searchName.toLowerCase())
  // }
}
