import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  open = false;

  constructor() { }

  @HostListener('window:scroll', [])
  checkScroll() {
    const navbar = document.getElementById('navbar');
    const sticky = navbar.offsetHeight;
    if (window.pageYOffset > sticky) {
      navbar.classList.add('fixed-top');
      navbar.classList.remove('bg-dark');
    } else {
      navbar.classList.remove('fixed-top');
      navbar.classList.add('bg-dark');
    }
  }

  ngOnInit() {
  }

}
