import { Component, OnInit , Input} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import {Subscription} from "rxjs/RX";

import {Recipe} from '../recipe';
import {RecipeService} from '../recipe.service';

import {ShoppingListService} from '../../shopping-list/shopping-list.service';


@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
private subscription: Subscription;
private recipeIndex: number;
selectedRecipe : Recipe;

  constructor(
      private sls: ShoppingListService, 
      private route: ActivatedRoute,
      private recipesService: RecipeService,
      private router: Router){ }

  addToShoppingList(){
    this.sls.addItems(this.selectedRecipe.ingredients);
  }

  onDelete(){
    this.recipesService.deleteRecipe(this.selectedRecipe);
    this.router.navigate(['/recipes']);
  }

  onEdit(){
    this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
  }

  ngOnInit() {
    this.subscription= this.route.params.subscribe(
      (params: any) => {
        this.recipeIndex = params['id'];
        this.selectedRecipe = this.recipesService.getRecipe(this.recipeIndex) ;
      }
    );
  }

  ngDestory(){
    this.subscription.unsubscribe();
  }

}
