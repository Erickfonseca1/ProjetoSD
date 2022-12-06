import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaibaMaisComponent } from './saiba-mais/saiba-mais.component';
import { AppRoutingModule } from '../app-routing.module';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeModule } from '../home/home.module';
import { ArtigoComponent } from './artigo/artigo.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { NoticeRansomwareComponent } from './notice-ransomware/notice-ransomware.component';
import { NoticeCommomComponent } from './notice-commom/notice-commom.component';


@NgModule({
  declarations: [
    SaibaMaisComponent,
    SobreComponent,
    ContatoComponent,
    ArtigoComponent,
    NoticeRansomwareComponent,
    NoticeCommomComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HomeModule,
    MatCardModule,
    MatDividerModule,
  ]
})
export class PagesModule { }
