import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {FavoritesService} from '../../shared/services/favourites.service';
import {Recipe} from '../../shared/classes/Recipe';

@Component({
  selector: 'app-favourites-list',
  templateUrl: './favourites-list.component.html',
  styleUrls: ['./favourites-list.component.scss']
})
export class FavouritesListComponent implements OnInit {

  @ViewChild('app-recipe-card') test: ElementRef;

  constructor(private favoritesService: FavoritesService) {
  }

  favoritesRecipes = [];

  ngOnInit(): void {
    this.favoritesService.get().subscribe(item => {
      this.favoritesRecipes.push(item);
    });
  }

  drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  removeFromFavorite(favorite: Recipe): void {
    console.log('close event triggered');
    const index = this.favoritesRecipes.findIndex(recipe => {
      return recipe.id === favorite.id;
    });
    console.log(index);
    this.favoritesRecipes = [...this.favoritesRecipes.slice(0, index), ...this.favoritesRecipes.slice(index, this.favoritesRecipes.length)];
  }
}
