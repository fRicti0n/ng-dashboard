import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public username: 'Supratik Roy';
  public comments: Array<any>;
  public totalComments: number;
  public page = 1;
  public videos = [
    {
      name: 'CS:GO BEST ODDSHOTS #291',
      embed: 'https://www.youtube.com/embed/lZO4alK9t7U'
    }
  ];

  constructor(private dataService: DataService, private sanitizer: DomSanitizer) {
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
    });
  }

  getEmbedUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.videos[0].embed);
  }

  getUsername() {
    return this.username;
  }

}
