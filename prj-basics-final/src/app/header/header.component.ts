import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  @Output() navigationPage = new EventEmitter<string>();

  public onSelect(select: string) {
    console.log(select);
    this.navigationPage.emit(select);
  }

}
