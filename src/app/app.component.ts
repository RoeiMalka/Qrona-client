import {Component, ViewChild, OnInit} from '@angular/core';
import {MapInfoWindow, MapMarker, GoogleMap, MapPolygon} from '@angular/google-maps';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  @ViewChild(MapMarker, { static: false}) marker: MapMarker;
  @ViewChild(MapPolygon, { static: false}) mapPolygon: MapPolygon;
  @ViewChild(MapInfoWindow, {static: false}) infoWindow: MapInfoWindow;

  constructor(private http: HttpService) {}

  size: google.maps.Size = new google.maps.Size(22, 22, 'px', 'px');
  danger_icon: google.maps.Icon = {
    url: '../assets/danger.svg',
    scaledSize: this.size
  };
  location_icon: google.maps.Icon = {
    url: '../assets/pin.svg',
    scaledSize: this.size
  };
  center = {lat: 31.9695729, lng: 34.844304};
  markerOptions = {draggable: false};
  polygonOptions: google.maps.PolygonOptions = {
    draggable: false,
    strokeColor: 'red',
    strokeWeight: 1,
    fillColor: 'red'
  };
  markerPositions: google.maps.LatLngLiteral[] = [];
  zoom = 18;
  display?: google.maps.LatLngLiteral;
  polygons = [];
  markers = [];

  ngOnInit() {
    // navigator.geolocation.getCurrentPosition(position => {
    //   this.center.lat = position.coords.latitude;
    //   this.center.lng = position.coords.longitude;
    //   this.markers.push({lat: position.coords.latitude, lng: position.coords.longitude});
    // });

    this.markers.push({
      position: {
        lat: this.center.lat,
        lng: this.center.lng
      },
      options: { animation: google.maps.Animation.DROP, icon: this.location_icon }
    });

    this.http.getAllPolygons().subscribe(polys => {
      for (const poly of polys) {
        for (const point of poly) {
          point.lat = parseFloat(point.lat);
          point.lng = parseFloat(point.lng);
        }
        this.polygons.push(poly);
      }
    });

    this.http.getAllCoordinates().subscribe(coors => {
      for (const coor of coors) {
        coor.lat = parseFloat(coor.lat);
        coor.lng = parseFloat(coor.lng);

        this.markers.push({
          position: {
            lat: coor.lat,
            lng: coor.lng
          },
          options: { animation: google.maps.Animation.DROP, icon: this.danger_icon },
        });
      }
    });
  }
}
