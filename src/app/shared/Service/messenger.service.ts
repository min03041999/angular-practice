import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {
  public like = new Subject<number>();
  public dislike = new Subject<number>();
  constructor() { }
  sendLike(mess: number) {
    this.like.next(mess);
  }

  sendDislike(mess: number) {
    this.dislike.next(mess);
  }

  // receivedMess(): Observable<number> {
  //   return this.subject.asObservable();
  // }
}
