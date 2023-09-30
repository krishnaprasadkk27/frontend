import { Component, ViewChild } from '@angular/core';
import { FormControl,NgForm,Validators } from '@angular/forms';
import {HttpClientModule,HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-phd',
  templateUrl: './phd.component.html',
  styleUrls: ['./phd.component.css']
})
export class PhdComponent {
  constructor(private http: HttpClient) { }
  public institute:any;
  public PhdGraduatedStudentsList :any;
  public PhdPersuingStudentsList :any;


  public PhdPersuingStudentInput: any = {
  CurrFullTimePhd:0,
  CurrPartTimePhd:0,
  CurrTotal:0


  }
  public PhdGraduatedStudentInputPartTime: any = {
    currYear_count: "",
    prevYear_Count: "",
    prev2Year_Count: ""
  }

  public PhdGraduatedStudentInputFullTime: any = {
    currYear_count: "",
    prevYear_Count: "",
    prev2Year_Count: ""
  }

  PhdPersuingStudentInputForm_FullTime = new FormControl("",[Validators.required])
  PhdPersuingStudentInputForm_PartTime = new FormControl("",[Validators.required])




   pt_PhdGraduatedStudentInputForm_currYear_Count = new FormControl("", [Validators.required])
   pt_PhdGraduatedStudentInputForm_prevYear_Count = new FormControl("", [Validators.required])
   pt_PhdGraduatedStudentInputForm_prev2Year_Count = new FormControl("", [Validators.required])


   ft_PhdGraduatedStudentInputForm_currYear_Count = new FormControl("", [Validators.required])
   ft_PhdGraduatedStudentInputForm_prevYear_Count = new FormControl("", [Validators.required])
   ft_PhdGraduatedStudentInputForm_prev2Year_Count = new FormControl("", [Validators.required])

   @ViewChild('currphd') currPhd:NgForm;
   @ViewChild('phdCompleted') phdCompleted:NgForm;

   phdPersuingSubmit(){
    console.log(this.currPhd);
    const currphdData=this.currPhd.value;
    return this.http.post('https://nirf-frontend-default-rtdb.asia-southeast1.firebasedatabase.app/currPhd.json',currphdData).subscribe(Response=>{
      console.log(Response);
    });

   }


   phdCompletedSubmit(){
console.log(this.phdCompleted);
const completedPhdData=this.phdCompleted.value;
return this.http.post('https://nirf-frontend-default-rtdb.asia-southeast1.firebasedatabase.app/CompletedPhd.json',completedPhdData).subscribe(Response=>{
  console.log(Response);
});




   }
   getCurrentYear(){
    return new Date().getFullYear();
   }


}

