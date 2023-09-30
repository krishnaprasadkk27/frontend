import { Component, ViewChild } from '@angular/core';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { NgFor } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent {
  constructor(private http: HttpClient) { }
public CapitalExpendature:any={
currYearLibrary:0,
currYarEqp:0,
currYearWorkshop:0,
currYearOth:0,

prevYearLibrary:0,
prevYarEqp:0,
prevYearWorkshop:0,
prevYearOth:0,


prev2YearLibrary:0,
prev2YarEqp:0,
prev2YearWorkshop:0,
prev2YearOth:0,
};

public operationalExpendature:any={
  currSalary:0,
  currMaintain:0,
  currSCW:0,

  prevSalary:0,
  prevMaintain:0,
  prevSCW:0,

  prev2Salary:0,
  prev2Maintain:0,
  prev2SCW:0,


};


@ViewChild('capExp') capitalExpendature:NgForm;
CapitalSubmit(){
  const CapExpData=this.capitalExpendature.value;
  console.log(CapExpData);

  return this.http.post('https://nirf-frontend-default-rtdb.asia-southeast1.firebasedatabase.app/CapitalExpendature.json',CapExpData).subscribe();




}


@ViewChild('opExp') operationalExp:NgForm;
operationlaSubmit(){

  const opExpData=this.operationalExp.value;
  console.log(opExpData);
  return this.http.post('https://nirf-frontend-default-rtdb.asia-southeast1.firebasedatabase.app/OpExp.json',opExpData).subscribe(Response =>{
    console.log(Response);
  });
  }


  getCurrentYear(){
    return new Date().getFullYear();
  }
}
