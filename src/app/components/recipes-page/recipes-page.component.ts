import {Component, OnInit} from '@angular/core';
import {RecipesService} from '../../shared/services/recipes.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {Recipe} from '../../shared/classes/Recipe';

@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.scss']
})
export class RecipesPageComponent implements OnInit {

  constructor(private recipesService: RecipesService) {
  }

  recipes: Recipe[];
  selectedRecipe: Recipe;

  ngOnInit(): void {
    this.recipesService.getRandom();
    this.recipesService.recipes.subscribe(recipes => {
      this.recipes = recipes;
    });
  }

  drop(event: CdkDragDrop<Recipe[], any>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);

    }
  }

  onOpen(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }
}
