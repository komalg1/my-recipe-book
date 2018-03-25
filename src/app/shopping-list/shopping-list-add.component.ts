import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { Ingredient } from '../common/ingredient';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})

export class ShoppingListAddComponent implements OnChanges {
  isAdd: boolean = true;
  @Input() item: {};
  @Output() cleared = new EventEmitter();

  constructor(private shoppingListService: ShoppingListService) {

  }

  ngOnChanges(changes: any) {
    if (changes.item.currentValue === null) {
      this.isAdd = true;
      this.item = null;
    } else {
      this.isAdd = false;
    }
  }

  onSubmit(ingredient: Input) {
    //const newIngredient=ingredient; 
    if (!this.isAdd) {
      this.shoppingListService.editItem(this.item, ingredient["name"]);
      this.onClear()
    } else {
      this.shoppingListService.addItem(ingredient["name"]);
    }
  }

  onClear() {
    this.isAdd = true;
    this.cleared.emit(true);
  }

  onDelete() {
    this.shoppingListService.deleteItem(this.item);
    this.onClear();
  }
}
