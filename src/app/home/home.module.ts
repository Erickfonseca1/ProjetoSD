import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CategoriesComponent } from './categories/categories.component';
import { NewsComponent } from './news/news.component';
import { MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    HeaderComponent,
    CategoriesComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    HeaderComponent,
    CategoriesComponent,
    NewsComponent
  ]
})
export class HomeModule { }
