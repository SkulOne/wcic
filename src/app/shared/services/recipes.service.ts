import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map, switchMap} from 'rxjs/operators';
import {Observable, forkJoin, Subject} from 'rxjs';
import {Recipe} from '../classes/Recipe';

@Injectable({
  providedIn: 'root'
})

export class RecipesService {
  get recipes(): Subject<Recipe[]> {
    return this._recipesBuf;
  }

  constructor(private httpClient: HttpClient) {
  }

  static URL = 'https://api.spoonacular.com/recipes';

  private _recipesBuf = new Subject<Recipe[]>();

  private readonly API_KEY = 'apiKey=66c2c34538034f3eaadf2a5ceb32e5bd';

  public getRandom(size= 10): void {
    const response = this.httpClient.get(`${RecipesService.URL}/random?${this.API_KEY}&number=${size}`);
    response.pipe(
      // todo
      // @ts-ignorer
      map(value => this.createRecipes(value.recipes))
    ).subscribe(dishes => {
      this.recipes.next(dishes);
    });
  }

  public searchByName(name: string): void {
    const response = this.httpClient.get(`${RecipesService.URL}/complexSearch?${this.API_KEY}&query=${name}`);
    response.pipe(
      switchMap(res => {
        // todo
        // @ts-ignore
        const dishesArray = res.results.map(dish => dish.id);
        return this.parallelRequest(dishesArray);
      }),
    ).subscribe(dishesArray => {
      // todo
      // @ts-ignore
      const dishes = dishesArray.map(dish => new Recipe(dish));
      this.recipes.next(dishes);
    });
  }

  public searchByIngredients(ingredients: string[]): void {
    const url = `${RecipesService.URL}/findByIngredients?${this.API_KEY}&ingredients=${ingredients.join(',+')}`;
    const response = this.httpClient.get(url);
    response.pipe(
      switchMap(res => {
        // todo
        // @ts-ignore
        return this.parallelRequest(res.map(results => results.id));
      }),
    ).subscribe(dishesArray => {
      const dishes = this.createRecipes(dishesArray);
      this.recipes.next(dishes);
    });
  }

  public getById(id): void{
    this.recipes.asObservable().subscribe(
      log => console.log(log)
    );
  }

  private createRecipes(array: any[]): Recipe[]{
    return array.map(dish => new Recipe(dish));
  }

  private parallelRequest(idArray: number[]): Observable<any>{
    return forkJoin(
      Array.from(
        idArray.map(id => this.httpClient.get(`${RecipesService.URL}/${id}/information?${this.API_KEY}`))
      )
    );
  }
}
