import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { RecipesPageComponent } from './components/recipes-page/recipes-page.component';
import {HttpClientModule} from '@angular/common/http';
import { RecipeCardComponent } from './components/recipes-page/recipe-card/recipe-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { RemoveTagsPipe } from './shared/pipes/remove-tags.pipe';
import { FavouritesListComponent } from './components/favourites-list/favourites-list.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import {FormsModule} from '@angular/forms';
import { IngredientComponent } from './components/ingredients/ingredient/ingredient.component';
import { DishPageModalComponent } from './components/dish-page-modal/dish-page-modal.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { TakeStr } from './shared/pipes/take-str';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesPageComponent,
    RecipeCardComponent,
    RemoveTagsPipe,
    FavouritesListComponent,
    IngredientsComponent,
    IngredientComponent,
    DishPageModalComponent,
    TakeStr
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        HttpClientModule,
        MatCardModule,
        MatButtonModule,
        DragDropModule,
        NgScrollbarModule,
        FormsModule,
        SwiperModule,
    ],
  providers: [
    {
      provide:SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
