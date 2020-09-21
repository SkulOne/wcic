import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {Recipe} from '../classes/Recipe';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  favorites = new Subject<Recipe>();

  constructor() { }

  add(recipe: Recipe): void{
    this.favorites.next(recipe);
  }

  get(): Subject<Recipe>{
    return this.favorites;
  }

}
