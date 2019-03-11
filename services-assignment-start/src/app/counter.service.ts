import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  userSetToInactive = new EventEmitter<number>();
  userSetToActive = new EventEmitter<number>();
  private counterActive = 0;
  private counterInactive = 0;


  constructor() { }

  setCountInactive(counter: number) {
    this.counterInactive = counter;
    console.log( `inactive ${this.counterInactive}` );
    this.userSetToInactive.emit(this.counterInactive);
  }

  setCountActive(counter: number) {
    this.counterActive = counter;
    console.log( `active ${this.counterActive}` );
    this.userSetToActive.emit(this.counterActive);
  }
}
