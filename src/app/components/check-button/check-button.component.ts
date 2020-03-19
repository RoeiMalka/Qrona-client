import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-check-button',
  templateUrl: './check-button.component.html',
  styleUrls: ['./check-button.component.scss']
})
export class CheckButtonComponent implements OnInit {

  constructor(private http: HttpService) { }

  ngOnInit(): void {
  }
 
  onClick() {
    this.http.getIsCloseToDangerZone().subscribe(res => {
      if (res) {
        alert('Danger');
      } else {
        alert('Not in Danger');
      }
    });
  }

}
