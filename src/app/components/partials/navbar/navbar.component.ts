import { Component, OnInit, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  open = false;

  @Input() nCount;
  @Input() mCount;
  @Input() notifications;
  @Input() messages;

  constructor(private _router: Router) { }

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

  showTooltip(event: any) {
    console.log(event.target);
  }

  onLogout() {
    this._router.navigate(['/login']);
  }

}
