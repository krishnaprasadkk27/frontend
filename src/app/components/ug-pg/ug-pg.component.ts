import { Component } from '@angular/core';
import {HttpClientModule,HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-ug-pg',
  templateUrl: './ug-pg.component.html',
  styleUrls: ['./ug-pg.component.css']
})
export class UgPgComponent {
  constructor(private http: HttpClient) { }



  getCurrentYear(){
    return new Date().getFullYear();
  }
}
