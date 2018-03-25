import { Injectable } from '@angular/core';
import {Ingredient} from '../common/ingredient';

@Injectable()
export class ShoppingListService{
    private items=[];

    constructor(){}

    getItems(){
        return this.items;
    }
    addItems(toBeAdded: {}){
        Array.prototype.push.apply(this.items,toBeAdded);
    }

    addItem(item:{}){
        this.items.push(item);
    }

    editItem(old:{},newAdded:{}){
        this.items[this.items.indexOf(old)]=newAdded;
    }

    deleteItem(item:{}){
        this.items.splice(this.items.indexOf(item),1);
    }
}