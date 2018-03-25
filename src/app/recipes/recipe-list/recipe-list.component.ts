import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

import { Recipe } from '../recipe';
import { Ingredient } from '../../common/ingredient';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})

export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  private searchTerms = new Subject<string>();

  constructor(private recipeService: RecipeService) {

  }

  ngOnInit() {
    this.recipeService.getAllData();
    this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => this.recipes = recipes
    );
  }

  searchRecipesByIngredients(term: string): void {
    this.recipeService.searchRecipes(term).subscribe(
      (recipes: Recipe[]) => this.recipes = recipes
    );
  }

  getTrendingRecipes(){
    this.recipeService.trendingRecipes().subscribe(
      (recipes: Recipe[]) => this.recipes = recipes
    );
  }

}