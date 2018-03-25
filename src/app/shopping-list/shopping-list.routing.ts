import { Routes, RouterModule, Route } from '@angular/router';
import { ShoppingListComponent } from './shopping-list.component';

const Shopping_routes: Routes = [
    { path: "", component: ShoppingListComponent }
];

export const shoppingRouting = RouterModule.forChild(Shopping_routes);
