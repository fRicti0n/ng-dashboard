import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private username: 'Supratik Roy';
  public comments: Array<any>;
  public totalComments: number;
  public page: number = 1;

  constructor(private dataService: DataService) {
    this.comments = new Array<any>();
  }

  ngOnInit() {
    this.getComments();
  }

  getComments() {
    this.dataService.getComments().subscribe((response) => {
      this.comments = response.json();
      this.totalComments = this.comments.length;
    }, (error) => {
      console.error(error);
    })
  }

}
