import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import {Recipe} from '../recipe';

import { RecipeItemComponent} from './recipe-item.component';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [];
  recipe = new Recipe('Dummy', 'Dummy Description', 'http://aacc.co.il/new/wp-content/uploads/2016/06/pojo-placeholder-2.png');
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }

}
