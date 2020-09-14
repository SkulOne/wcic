export interface Recipe {
  title: string;
  imgSrc: string;
  instructions: string;
  isVegan: boolean;
  isVegetarian: boolean;
  readyInMinutes: number;
  sourceUrl: number;

  // todo: Доделать интерфейс
  steps: [any];
  ingredients: [any];
}
