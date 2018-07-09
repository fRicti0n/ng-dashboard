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
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;

    if (window.pageYOffset > sticky) {
      console.log('added css')
      navbar.classList.add("fixed-top")
    } else {
      console.log('removed css')
      navbar.classList.remove("fixed-top");
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
