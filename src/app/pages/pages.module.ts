import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaibaMaisComponent } from './saiba-mais/saiba-mais.component';
import { AppRoutingModule } from '../app-routing.module';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeModule } from '../home/home.module';


@NgModule({
  declarations: [
    SaibaMaisComponent,
    SobreComponent,
    ContatoComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HomeModule
  ]
})
export class PagesModule { }
