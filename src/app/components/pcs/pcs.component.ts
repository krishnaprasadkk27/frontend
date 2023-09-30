import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { coerceStringArray } from '@angular/cdk/coercion';

@Component({
  selector: 'app-pcs',
  templateUrl: './pcs.component.html',
  styleUrls: ['./pcs.component.css']
})
export class PcsComponent {

  constructor(private http: HttpClient) { }
  buttonPressed = false;
  lifts:String;
  walkingAids:String;
  toilets:String;

  @ViewChild('pcs') pcsfacility:NgForm;
  pcsFacilities(){
  console.log("hello");
  console.log(this.pcsfacility.form.controls['toilets'].value);
  console.log(this.lifts);
  const pcsFacilityData=this.pcsfacility.value;
  console.log(pcsFacilityData);
  return this.http.post('https://nirf-frontend-default-rtdb.asia-southeast1.firebasedatabase.app/PhysicallyChallenged.json',pcsFacilityData).subscribe(Response=>{
    console.log(Response);
  });

  }
}
