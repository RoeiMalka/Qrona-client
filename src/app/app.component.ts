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

  center = {lat: 31.9695729, lng: 34.844304};
  markerOptions = {draggable: false};
  polygonOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [];
  zoom = 16;
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
      options: { animation: google.maps.Animation.BOUNCE },
    })

    this.http.getAllPolygons().subscribe(polys => this.polygons.push(polys));
  }
}
