import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    //this.getData();
  }

}
