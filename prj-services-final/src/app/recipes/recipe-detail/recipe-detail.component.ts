import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {

    console.log(this.route);
    this.route.params.subscribe(
      (data: Data) => {
        this.id = data['id'];
        this.recipe = this.recipeService.getRecipesById(+this.id);
      }
    )
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    this.router.navigate(['shopping']);
  }

  onEditRecipe() {
    this.router.navigate([ `edit`], {relativeTo: this.route}  );
  }

}
