import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToArtigo() {
    localStorage.setItem('lastEndpoint', '/artigo-lgpd-tsi');
    this.router.navigate(['/artigo-lgpd-tsi']);
  }

  navigateToNotice2() {
    localStorage.setItem('lastEndpoint', '/ransomware-pagamentos-por-resgates-de-dados-tiveram-aumento-de-78-em-2021');
    this.router.navigate(['/ransomware-pagamentos-por-resgates-de-dados-tiveram-aumento-de-78-em-2021']);
  }

  navigateToNotice3() {
    localStorage.setItem('lastEndpoint', '/quatro-em-dez-empresas-brasileiras-agem-contra-vazamento-de-dados');
    this.router.navigate(['/quatro-em-dez-empresas-brasileiras-agem-contra-vazamento-de-dados']);
  }

}
