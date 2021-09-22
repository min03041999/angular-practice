import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/shared/Model/category.model';
import { PokemonService } from 'src/app/shared/Service/pokemon.service';
import { Location } from '@angular/common';
import { Pokemon } from 'src/app/shared/Model/pokemon.model';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css'],
})
export class PokemonFormComponent implements OnInit {
  pokemonID!: number;
  isAddMode!: boolean;
  typePokemon: Category[] = [];
  formPokemon!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private pokemonService: PokemonService,
    private router: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getCategory();
    // console.log(typeof(+this.router.snapshot.params.id));
    this.pokemonID = +this.router.snapshot.params.id;
    this.isAddMode = !this.pokemonID;
    this.initForm();
    //Check if true is formEdit, false is formAdd
    if (this.pokemonID) {
      // console.log('hihi');
      this.pokemonService.updatePokemon(this.pokemonID).subscribe((p: any) => {
        console.log(p);
        this.uploadPokemon(p);
      });
    }
  }

  getCategory() {
    this.pokemonService.getCategory().subscribe((data: any) => {
      this.typePokemon = data;
    });
  }

  initForm() {
    this.formPokemon = this.formBuilder.group({
      name: this.formBuilder.group({
        english: ['', [Validators.required, Validators.maxLength(100)]],
      }),
      type: ['', Validators.required],
      base: this.formBuilder.group({
        attack: [null, Validators.required],
        defense: [null, Validators.required],
        hp: [null, Validators.required],
        spAttack: [null, Validators.required],
        spDefense: [null, Validators.required],
        speed: [null, Validators.required],
      }),
    });
  }

  uploadPokemon(pokemon: Pokemon) {
    this.formPokemon.patchValue({
      name: {
        english: pokemon.name.english,
      },
      type: pokemon.type,
      base: {
        hp: pokemon.base.HP,
        attack: pokemon.base.Attack,
        defense: pokemon.base.Defense,
        spAttack: pokemon.base.SpAttack,
        spDefense: pokemon.base.SpDefense,
        speed: pokemon.base.Speed,
      },
    });
  }

  //Cancel
  public onCancel = () => {
    this.location.back();
  };

  onSubmitEdit() {
    console.log(this.formPokemon.value);
  }

  onSubmitAdd() {
    console.log(this.formPokemon.value);
  }
}
