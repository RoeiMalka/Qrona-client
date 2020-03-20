import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Polygon } from './models/polygon-model';
import { Point } from './models/point-model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getAllPolygons() {
    return this.http.get<Point[][]>('http://localhost:5000/coordinates/polygons');
  }

  getAllCoordinates() {
    return this.http.get<Point[]>('http://localhost:5000/coordinates/all');
  }

  getIsCloseToDangerZone() {
    let lat = 1; 
    let lng = 1;
    navigator.geolocation.getCurrentPosition(position => {
      lat = position.coords.latitude;
      lng = position.coords.longitude;
    });
    return this.http.get('http://localhost:5000/coordinates', {params: {lat: lat.toString(), lng: lng.toString(), radius: '100'}});
  }
}
