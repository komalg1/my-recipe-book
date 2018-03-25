import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Recipe } from './recipe';
import { Ingredient } from '../common/ingredient';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [new Recipe('Pruttles', 'Best breakfast food ever, shown here with eggs and toast.  '
  , 'https://i.ytimg.com/vi/VGSc5WIljb0/maxresdefault.jpg', [new Ingredient('Pork', 8, 'lbs, not lean\!'),
    new Ingredient('Broth', 8, 'qts.'),
    new Ingredient('Oats', 1, 'lg. bx. oatmeal')],
    'Zach Grauerholz',
    'https://lh3.googleusercontent.com/-4zYfsZXd_Lo/AAAAAAAAAAI/AAAAAAAAIxI/SjxY0asPGbk/photo.jpg',
    'zachary.grauerholz@gmail.com'),
  new Recipe('Rouladen', 'A German meat dish, usually consisting of bacon, onions, mustard and pickles wrapped in thinly ', 'http://hostthetoast.com/wp-content/uploads/2013/04/Rouladen-110.jpg',
    [new Ingredient('Round Steak', 2, 'lbs.'),
    new Ingredient('Onion', 0.5, 'cup'),
    new Ingredient('Sauerkraut', 1, 'cup'),
    new Ingredient('Bacon', 4, 'slices'),
    new Ingredient('Mustard', 0.25, 'cup'),
    new Ingredient('Fat', 2, 'tbsp'),
    new Ingredient('Beef Broth', 2, 'cups'),
    new Ingredient('Flour', 3, 'tbsp')],
    'Zach Grauerholz',
    'https://lh3.googleusercontent.com/-4zYfsZXd_Lo/AAAAAAAAAAI/AAAAAAAAIxI/SjxY0asPGbk/photo.jpg',
    'zachary.grauerholz@gmail.com')];

  recipesChanged = new EventEmitter<Recipe[]>();

  constructor(private http: Http, private router: Router) { }

  getRecipes(): Recipe[] {
    return this.recipes;
  }

  getRecipeById(id): Observable<Recipe> {
    return this.http.get("http://food2fork.com/api/get?key=301af66d975d03a6d4414379872d999b&rId=" + id)
      .map(data => {
        data.json(); console.log(data.json());
        return data.json();
      });

  }

  getAllData() {
    return this.http.get("http://food2fork.com/api/search?key=301af66d975d03a6d4414379872d999b")
      .map((response: Response) => response.json())
      .subscribe(
        (data: Recipe[]) => {
          console.log(data);
          this.recipes = data;
          delete this.recipes["count"];
          this.recipesChanged.emit(this.recipes);
          this.router.navigate(['/recipes']);
        }
      )
  }

  searchRecipes(term: string): Observable<Recipe[]> {
    return this.http.get("http://food2fork.com/api/search?key=301af66d975d03a6d4414379872d999b&q=" + term)
      .map(data => {
        data.json(); console.log(data.json());
        return data.json();
      });
  }

  trendingRecipes() {
    return this.http.get("http://food2fork.com/api/search?key=301af66d975d03a6d4414379872d999b&sort=t")
      .map(data => {
        data.json(); console.log(data.json());
        return data.json();
      });
  }
}