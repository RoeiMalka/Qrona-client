import {Component, ViewChild, OnInit} from '@angular/core';
import {MapInfoWindow, MapMarker, GoogleMap, MapPolygon} from '@angular/google-maps';

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

  constructor() {}

  center = {lat: 24, lng: 12};
  markerOptions = {draggable: false};
  polygonOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [];
  zoom = 17;
  display?: google.maps.LatLngLiteral;
  polygons = [];
  
  ngOnInit() {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position);
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    });

    this.polygons.push([new google.maps.LatLng({lat: 10, lng: 10}), 
      new google.maps.LatLng({lat: 5, lng: 5}),
      new google.maps.LatLng({lat: 4, lng: 7})]);

    this.polygons.push([new google.maps.LatLng({lat: 35, lng: 10}), 
      new google.maps.LatLng({lat: 25, lng: 5}),
      new google.maps.LatLng({lat: 20, lng: 7})]);
  }
}
