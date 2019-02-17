import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isShowDeatils : Boolean = false
  logs: Date[] = []

  toggle() {
    this.isShowDeatils = !this.isShowDeatils
    this.logs.push(new Date());
  }

  isShowDetails() {
    return this.isShowDeatils
  }
}
