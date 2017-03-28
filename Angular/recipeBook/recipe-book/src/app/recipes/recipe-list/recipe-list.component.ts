import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import {Recipe} from '../recipe';

import { RecipeItemComponent} from './recipe-item.component';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [
    new Recipe('Schnitzel', 'Dummy Description', 'http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg', []),
    new Recipe('Summer Salad', 'Dummy Description 2', 'http://cdn.iowagirleats.com/wp-content/uploads/2013/05/Triple-Berry-Summer-Salad-03_mini.jpg', []),
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }

}
