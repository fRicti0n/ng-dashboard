import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  // google maps zoom level
  zoom = 8;

  // initial center position for the map
  latitude;
  longitude;

  constructor() {
    window.navigator.geolocation.getCurrentPosition(position => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
    });
  }

  ngOnInit() {
  }

}
