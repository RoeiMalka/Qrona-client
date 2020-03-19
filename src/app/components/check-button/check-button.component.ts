import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-check-button',
  templateUrl: './check-button.component.html',
  styleUrls: ['./check-button.component.scss']
})
export class CheckButtonComponent implements OnInit {

  constructor(private _http: HttpService) { }

  ngOnInit(): void {
  }

  onClick() {

  }

}
