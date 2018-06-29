import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  private routerList = [
    { path: 'home', display: 'Home', icon: 'fa fa-home'},
    { path: 'profile', display: 'Profile', icon: 'fa fa-user'},
    { path: 'my-docs', display: 'My Documents', icon: 'fa fa-file'},
    { path: 'upload', display: 'Upload', icon: 'fa fa-upload'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
