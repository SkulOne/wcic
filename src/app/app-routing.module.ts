import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DishPageModalComponent} from './components/dish-page-modal/dish-page-modal.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  // { path: 'test', component: DishPageModalComponent },
  // { path: 'recipesBuf', component: AppComponent },
  // { path: '', redirectTo: '/recipesBuf', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
