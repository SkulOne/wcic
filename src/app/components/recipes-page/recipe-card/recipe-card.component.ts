import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FavoritesService} from '../../../shared/services/favourites.service';
import {map} from 'rxjs/operators';
import {
  NgResizeObserver,
  ngResizeObserverProviders
} from 'ng-resize-observer';
import {Recipe} from '../../../shared/classes/Recipe';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
  providers: [...ngResizeObserverProviders]
})
export class RecipeCardComponent implements OnInit {

  @Input() recipe: Recipe;
  @Output() showButtonClick = new EventEmitter<Recipe>();
  @Output() close = new EventEmitter<Recipe>();

  constructor(private favoritesService: FavoritesService, private resize$: NgResizeObserver) {
  }

  isSmall: boolean;
  smallCardWidth = 300;
  width$ = this.resize$.pipe(map(entry => {
    this.isSmall = entry.contentRect.width <= this.smallCardWidth;
  }));

  ngOnInit(): void {
    this.width$.subscribe();
  }

  addToFavorite(): void {
    this.favoritesService.add(this.recipe);
  }

  showDishPage(): void {
    this.showButtonClick.emit(this.recipe);
  }

  removeFromFavorite(): void{
    console.log('close btn click');
    this.close.emit(this.recipe);
  }
}
