import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import {HttpClientModule,HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent {
  constructor(private http: HttpClient) { }


  researchDetails:any={
    currTotalSpProj:0,
    currTotalFundAgency:0,
    currTotalAmtRcv:0,
    currAmtrcv:"",

    prevTotalSpProj:0,
    prevTotalFundAgency:0,
    prevTotalAmtRcv:0,
    prevAmtrcv:"",

    prev2TotalSpProj:0,
    prev2TotalFundAgency:0,
    prev2TotalAmtRcv:0,
    prev2Amtrcv:""


  }

  ConsultancyProjectDetails:any={
    currTotalConsProj:0,
    currTotalClientorg:0,
    currTotalAmtRcv:0,
    currAmtrcv:"",

    prevTotalConsProj:0,
    prevTotalClientorg:0,
    prevTotalAmtRcv:0,
    prevAmtrcv:"",

    prev2TotalConsProj:0,
    prev2TotalClientorg:0,
    prev2TotalAmtRcv:0,
    prev2Amtrcv:""


  }

  buttonPressed:false;

  curr_TotalSpProj =new FormControl(0,[Validators.required]);
  prev_TotalSpProj =new FormControl(0, [Validators.required]);
  prev2_TotalSpProj =new FormControl(0, [Validators.required]);

  curr_TotalFundAgency =new FormControl(0, [Validators.required]);
  prev2_TotalFundAgency =new FormControl(0, [Validators.required]);
  prev_TotalFundAgency =new FormControl(0, [Validators.required]);

  curr_TotalAmtRcv=new FormControl(0, [Validators.required]);

  prev_TotalAmtRcv=new FormControl(0, [Validators.required]);


  prev2_TotalAmtRcv=new FormControl(0, [Validators.required]);

  curr_TotalConsProj =new FormControl(0,[Validators.required]);
  prev_TotalConsProj=new FormControl(0, [Validators.required]);
  prev2_TotalConsProj =new FormControl(0, [Validators.required]);

  curr_TotalClientorg =new FormControl(0, [Validators.required]);
  prev2_TotalClientorg =new FormControl(0, [Validators.required]);
  prev_TotalClientorg =new FormControl(0, [Validators.required]);

  curr_TotalAmtRcvCsty=new FormControl(0, [Validators.required]);

  prev_TotalAmtCsty=new FormControl(0, [Validators.required]);


  prev2_TotalAmtCsty=new FormControl(0, [Validators.required]);







@ViewChild('research') research:NgForm;
  pressButton(){
    buttonPressed:true;
    console.log(this.research.form.controls[''])



  }




  researchSubmit(){
    console.log(this.research);
    const researchData=this.research.value;
    return this.http.post('https://nirf-frontend-default-rtdb.asia-southeast1.firebasedatabase.app/res.json',researchData).subscribe(Response =>{
      console.log(Response);
    });

  }
  getCurrentYear(): number {
    return new Date().getFullYear();
  }

  @ViewChild('consultancy') consultancyVal:NgForm;
  ConsultancySubmit(){
const consultancyData=this.consultancyVal.value;
return this.http.post('https://nirf-frontend-default-rtdb.asia-southeast1.firebasedatabase.app/cons.json',consultancyData).subscribe();


  }
}
