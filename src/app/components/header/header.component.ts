import { Component, OnInit } from '@angular/core';
import {RecipesService} from '../../shared/services/recipes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  dishName: string;

  constructor(private recipeService: RecipesService) { }

  ngOnInit(): void {

  }

  searchDish(): void{
    this.recipeService.searchByName(this.dishName);
  }

}
