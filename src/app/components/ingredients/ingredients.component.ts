import { Component, OnInit } from '@angular/core';
import {RecipesService} from '../../shared/services/recipes.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

  constructor(private recipeService: RecipesService) { }

  ingredients: string[] = ['sugar', 'apple', 'flour'];

  ngOnInit(): void {
  }

  add(value): void {
    this.ingredients.push(value);
  }

  searchByIngredients(): void {
      this.recipeService.searchByIngredients(this.ingredients);
  }
}
