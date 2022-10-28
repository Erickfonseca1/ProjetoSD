import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CategoriesComponent } from './categories/categories.component';
import { MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    HeaderComponent,
    CategoriesComponent 
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    HeaderComponent,
    CategoriesComponent
  ]
})
export class HomeModule { }
