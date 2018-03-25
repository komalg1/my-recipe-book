import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent implements OnInit {

  private recipeIndex: number;
  public addedToCart:boolean=false;
  selectedRecipe: Recipe;

  
  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router, private shoppingListService:ShoppingListService) {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      this.getRecipeById();
      

    });
  }

  ngOnInit() {
    // this.subscription = this.route.params.subscribe(
    //   (params: any) => {
    //     this.recipeIndex = params['id'];
    //     this.selectedRecipe = this.recipeService.getRecipe(this.recipeIndex);
    //   }
    // )
    this.getRecipeById();
  }

  getRecipeById(): void {
    const id = this.route.snapshot.paramMap.get('id')[0];
    this.recipeService.getRecipeById(id)
      .subscribe(data => {
      this.selectedRecipe = data;
        console.log(this.selectedRecipe);
      }
      );
  }

  addToShoppingList(){
    this.shoppingListService.addItems(this.selectedRecipe["recipe"].ingredients);
    this.addedToCart=true;
    setTimeout(function() {
      this.addedToCart = false;
      console.log(this.addedToCart);
    }.bind(this), 3000);
  }

}