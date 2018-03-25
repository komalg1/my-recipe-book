import { Ingredient } from "../common/ingredient";


export class Recipe {
  constructor(
     public name: string,
     public description: string,
     public imageUrl: string, 
     public ingredients: Ingredient[],
     public author: string, 
     public authorPhotoUrl: string, 
     public authorEmail: string) {
  }
}
