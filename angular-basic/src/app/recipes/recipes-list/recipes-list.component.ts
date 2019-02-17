import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Beans', 'delicious',
     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg6Y6X_xlO0o5_IxUwzGcv9IztgaCgkn58y8-1gXboxpfss2pY')
  ];

  constructor() { }

  ngOnInit() {
  }

}
