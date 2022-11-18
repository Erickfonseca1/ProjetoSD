import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CategoriesComponent } from './categories/categories.component';
import { NewsComponent } from './news/news.component';
import { MatCardModule} from '@angular/material/card';
import { MatDividerModule} from '@angular/material/divider';
import { MatIconModule} from '@angular/material/icon';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { VideosComponent } from './videos/videos.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { EventsComponent } from './events/events.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CategoriesComponent,
    NewsComponent,
    VideosComponent,
    HighlightsComponent,
    EventsComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule,
    YouTubePlayerModule
  ],
  exports: [
    HeaderComponent,
    CategoriesComponent,
    NewsComponent,
    VideosComponent,
    HighlightsComponent,
    EventsComponent
  ]
})
export class HomeModule { }
