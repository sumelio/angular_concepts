import { Component, OnInit, Input, ViewEncapsulation,
  OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked {


  @Input('srvElement') srvElement: {type: string, name: string, content: string};
  @Input() name: string;


  constructor() { console.log('constructor called!'); }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges !');
    console.log(changes);
  }
  ngOnInit() {
    console.log('constructor ngOnInit!');
  }

  ngDoCheck(): void {
    console.log('constructor ngDoCheck!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
}
