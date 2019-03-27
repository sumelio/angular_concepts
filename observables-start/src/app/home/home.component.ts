import { Component, OnInit } from '@angular/core';
import { Observable, Observer, interval } from 'rxjs';
// tslint:disable-next-line:import-blacklist
// import 'rxjs/Rx';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      const myNumbers = interval(1000)
      .pipe(map(
        (data: number) => data * 10
      ));

      myNumbers.subscribe(
        (number) => {console.log(number); }
      );

    const myObservable = Observable.create((observer: Observer<String>) => {
       setTimeout(() => {
         observer.next('first');
       }, 1000);
       setTimeout(() => {
        observer.next('second');
      }, 3000);
      setTimeout(() => {
        observer.complete();
      }, 3020);
      setTimeout(() => {
        observer.next('Third');
      }, 4000);
    }
    );

    myObservable.subscribe(
      (data: string) => { console.log(data); }
    );
  }

}
