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

  center = {lat: 31.5, lng: 35};
  markerOptions = {draggable: false};
  polygonOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [];
  zoom = 7.7;
  display?: google.maps.LatLngLiteral;
  polygons = [];
  
  ngOnInit() {
    this.http.getAllPolygons().subscribe(polys => this.polygons.push(polys));
  }
}
