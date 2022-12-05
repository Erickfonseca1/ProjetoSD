import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CategoriesComponent } from './categories/categories.component';
import { NewsComponent } from './news/news.component';
import { MatCardModule} from '@angular/material/card';
import { MatDividerModule} from '@angular/material/divider';
import { MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from '../app-routing.module';
import { VideosComponent } from './videos/videos.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { RouterComponent } from './router/router.component';
import { TopbarComponent } from './topbar/topbar.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CategoriesComponent,
    NewsComponent,
    VideosComponent,
    HighlightsComponent,
    EventsComponent,
    HomeComponent,
    RouterComponent,
    TopbarComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    CategoriesComponent,
    NewsComponent,
    VideosComponent,
    HighlightsComponent,
    EventsComponent,
    RouterComponent,
    TopbarComponent
  ]
})
export class HomeModule { }
