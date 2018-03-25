import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { shoppingRouting } from "./shopping-list.routing";
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list-add.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        shoppingRouting
    ],
    declarations: [
        ShoppingListComponent,
        ShoppingListAddComponent
    ]
})

export class ShoppingListModule { }   