import { Component, OnInit } from '@angular/core';
import { MessengerService } from '../shared/Service/messenger.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  like = 0;
  dislike = 0
  constructor(private messgerService: MessengerService) { }

  ngOnInit(): void {
    this.messgerService.like.subscribe(data => {
      this.like += data;
      console.log(data)
    })
    this.messgerService.dislike.subscribe(data => {
      this.dislike += data;
    })
  }

}
