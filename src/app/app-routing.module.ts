import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaibaMaisComponent } from './pages/saiba-mais/saiba-mais.component';
import { HomeComponent } from './home/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { ArtigoComponent } from './pages/artigo/artigo.component';
import { NoticeRansomwareComponent } from './pages/notice-ransomware/notice-ransomware.component';
import { NoticeCommomComponent } from './pages/notice-commom/notice-commom.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'saiba-mais',
    component: SaibaMaisComponent
  },
  {
    path: 'sobre',
    component: SobreComponent
  },
  {
    path: 'contato',
    component: ContatoComponent
  },
  {
    path: 'artigo-lgpd-tsi',
    component: ArtigoComponent
  },
  {
    path: 'ransomware-pagamentos-por-resgates-de-dados-tiveram-aumento-de-78-em-2021',
    component: NoticeRansomwareComponent
  },
  {
    path: 'quatro-em-dez-empresas-brasileiras-agem-contra-vazamento-de-dados',
    component: NoticeCommomComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
