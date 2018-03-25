import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { recipesRouting } from './recipes.routing';

import {RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item.component';



@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        recipesRouting
    ],
    declarations: [
        RecipesComponent,
        RecipeStartComponent,
        RecipeDetailComponent,
        RecipeListComponent,
        RecipeItemComponent,
    ]
})

export class RecipesModule { }