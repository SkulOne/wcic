import {Component, Input, OnInit} from '@angular/core';
import {Ingredient} from '../../../shared/classes/Ingredient';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent implements OnInit {

  constructor() { }

  @Input() ingredient: string;

  ngOnInit(): void {
  }


}
