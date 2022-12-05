import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.css']
})
export class RouterComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('lastEndpoint') === null)
      localStorage.setItem('lastEndpoint', '/home');
    
    this.router.navigate([`${localStorage.getItem('lastEndpoint')}`]);
  }

}
