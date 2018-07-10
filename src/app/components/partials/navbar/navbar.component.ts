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

  toggleNav() {
    if (!this.open) {
      document.getElementById('mySidenav').style.width = '250px';
      // if (window.screen.width > 320) {
      //   document.getElementById('main').style.marginLeft = '250px';
      // }
      document.getElementById('main').style.marginLeft = '250px';
      this.open = true;
    } else if (this.open) {
      document.getElementById('mySidenav').style.width = '0';
      // if (window.screen.width > 320) {
      //   document.getElementById('main').style.marginLeft = '0';
      // }
      document.getElementById('main').style.marginLeft = '0';
      this.open = false;
    }
  }

}
