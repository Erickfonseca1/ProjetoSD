import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToSaibaMais() {
    localStorage.setItem('lastEndpoint', '/saiba-mais');
    this.router.navigate([`${localStorage.getItem('lastEndpoint')}`]);
  }

  goToNews() {
    document.getElementById('news')!.scrollIntoView({ behavior: 'smooth' });
  }

  goToVideos() {
    document.getElementById('videos')!.scrollIntoView({ behavior: 'smooth' });
  }

}
