import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes=[
    {path :'', redirectTo:'/recipes', pathMatch:'full'},
    {path:'recipes',loadChildren:'./recipes/recipe.module#RecipesModule'},
    {path:"shopping",loadChildren:'./shopping-list/shopping-list.module#ShoppingListModule'}, 
    {path:'**',redirectTo:'/recipes',pathMatch:'full'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);