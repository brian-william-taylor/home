import { Component, OnInit } from '@angular/core';

import { ShoppingListAddComponent } from './shopping-list-add.component';

import { Ingredient } from '../recipes/ingredient';


@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
  item: Ingredient [] = [];
  constructor() { }

  ngOnInit() {
  }

}
