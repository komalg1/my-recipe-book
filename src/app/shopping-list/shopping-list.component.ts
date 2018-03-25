import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from '../common/ingredient';
import { SlicePipe } from '@angular/common';
import {  trigger, state, style, transition,animate,keyframes} from '@angular/animations';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  items=[];
  selectedItem=null;

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(){
    this.items = this.shoppingListService.getItems();
  }

  onSelectedItem(item:{}){
    this.selectedItem=item;
  }

  onCleared(){
    this.selectedItem=null;
  }
}
