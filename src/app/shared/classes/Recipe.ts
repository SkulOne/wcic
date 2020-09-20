import {Ingredient} from './Ingredient';

export class Recipe{

  private readonly _id: number;
  private readonly _title: string;
  private readonly _imgSrc: string;
  private readonly _instructions: string;
  private readonly _isVegan: boolean;
  private readonly _isVegetarian: boolean;
  private readonly _readyInMinutes: number;
  private readonly _sourceUrl: number;
  private readonly _steps: [any];
  private readonly _ingredients: Ingredient[];

  constructor(item) {
    this._id = item.id;
    this._title = item.title;
    this._sourceUrl = item.sourceUrl;
    this._imgSrc = item.image;
    // todo take first 100 symbol
    this._instructions = item.instructions;
    this._steps = item.analyzedInstructions[0] ? item.analyzedInstructions[0].steps : '';
    this._ingredients =  item.extendedIngredients.map(ingredient => new Ingredient(ingredient));
    this._readyInMinutes = item.readyInMinutes;
    this._isVegan = item.vegan;
    this._isVegetarian = item.vegetarian;
  }


  get id(): number {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  get imgSrc(): string {
    return this._imgSrc;
  }

  get instructions(): string {
    return this._instructions;
  }

  get isVegan(): boolean {
    return this._isVegan;
  }

  get isVegetarian(): boolean {
    return this._isVegetarian;
  }

  get readyInMinutes(): number {
    return this._readyInMinutes;
  }

  get sourceUrl(): number {
    return this._sourceUrl;
  }

  get steps(): [any] {
    return this._steps;
  }

  get ingredients(): Ingredient[] {
    return this._ingredients;
  }
}
