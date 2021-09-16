import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/shared/Model/category.model';
import { CategoryService } from 'src/app/shared/Service/category.service';
import { PokemonService } from 'src/app/shared/Service/pokemon.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pokemon-edit',
  templateUrl: './pokemon-edit.component.html',
  styleUrls: ['./pokemon-edit.component.css']
})
export class PokemonEditComponent implements OnInit {
  results: Category[] = [];
  formUpdate!: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private pokemonService: PokemonService,
    private router: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getCategory();
    // console.log(typeof(+this.router.snapshot.params.id));
    const pokemonID = +this.router.snapshot.params.id;
    this.pokemonService.updatePokemon(pokemonID).subscribe((result: any) =>{
      // console.log(result)
      this.formUpdate = this.formBuilder.group({
        name: [result.name.english , [Validators.required, Validators.maxLength(100)]],
        type: [result.type, [Validators.required]],
        base: this.formBuilder.group({
          attack: [result.base.Attack, Validators.required],
          defense: [result.base.Defense, Validators.required],
          hp: [result.base.HP, Validators.required],
          spAttack: [result.base.SpAttack, Validators.required],
          spDefense: [result.base.SpDefense, Validators.required],
          speed: [result.base.Speed, Validators.required]
        })
      })
    });


  }

  getCategory() {
    this.categoryService.getCategory().subscribe((data: any)=>{
      this.results = data.results;
    })
  }

  //Cancel
  public onCancel = () => {
    this.location.back();
  }

  submit(){
    console.log(this.formUpdate.value)
  }
}
