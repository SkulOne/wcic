import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../../shared/classes/Recipe';
import { SwiperComponent, SwiperDirective } from 'ngx-swiper-wrapper';
import { SwiperOptions } from 'swiper';
import { PaginationOptions } from 'swiper/types/components/pagination';
import { ScrollbarOptions } from 'swiper/types/components/scrollbar';
import {RecipesService} from '../../shared/services/recipes.service';

@Component({
  selector: 'app-dish-page-modal',
  templateUrl: './dish-page-modal.component.html',
  styleUrls: ['./dish-page-modal.component.scss']
})
export class DishPageModalComponent implements OnInit {

  // @Input() recipe: Recipe;
  @Output() onClose = new EventEmitter();

  constructor(private recipeService: RecipesService) { }

  public config: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 2,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: false
  };

  recipe: Recipe;

  ngOnInit(): void {

  }

  onClick(): void {
  }
}
