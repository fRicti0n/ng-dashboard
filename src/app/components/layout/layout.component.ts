import { Component, OnInit, Output } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  open = false;

  @Output() nCount;
  @Output() mCount;
  @Output() notifications;
  @Output() messages;

  public n_count: number;
  public m_count: number;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getUsers().subscribe(users => {
      this.notifications = users.json();
      this.messages = users.json();
      this.m_count = this.n_count = users.json().length;
    });
  }

}
