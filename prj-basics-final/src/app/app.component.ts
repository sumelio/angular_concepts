import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public recipesShow = true;
  public navigationPage(page: string) {
    this.recipesShow = page === 'Recipes';
  }
}
