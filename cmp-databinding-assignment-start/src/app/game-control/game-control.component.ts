import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalEmitter = new EventEmitter<number>();
  private intervalFunc;
  public i = { counter: 0 };
  constructor() {}

  ngOnInit() {}

  starting() {
    this.i.counter = 0;
    this.intervalFunc = setInterval(
      function(ref) {
        ref.intervalEmitter.emit(ref.i.counter++);
      },
      1000,
      this
    );
  }

  stopping() {
    window.clearInterval(this.intervalFunc);
  }


}
