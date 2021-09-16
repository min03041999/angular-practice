import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { MessengerService } from 'src/app/shared/Service/messenger.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit{

  constructor(
  @Inject(MAT_DIALOG_DATA) public data:any,
  private messgerService: MessengerService
  ) { }

  ngOnInit(){
  }

  clickLike() {
    this.messgerService.sendLike(1);
  }

  clickDislike() {
    this.messgerService.sendDislike(1);
  }
}
