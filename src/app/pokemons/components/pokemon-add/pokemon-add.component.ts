import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/shared/Model/category.model';
import { CategoryService } from 'src/app/shared/Service/category.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pokemon-add',
  templateUrl: './pokemon-add.component.html',
  styleUrls: ['./pokemon-add.component.css']
})
export class PokemonAddComponent implements OnInit {
  formAdd!: FormGroup;
  results: Category[] = [];

  constructor(private location: Location, private categoryService: CategoryService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getCategory();
    this.formAdd = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      type: [null, Validators.required],
      base: this.formBuilder.group({
        attack: [null, Validators.required],
        defense: [null, Validators.required],
        hp: [null, Validators.required],
        spAttack: [null, Validators.required],
        spDefense: [null, Validators.required],
        speed: [null, Validators.required]
      })
    })
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
    console.log(this.formAdd.value)
  }

}
