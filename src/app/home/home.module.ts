import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CategoriesComponent } from './categories/categories.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HomeModule { }
