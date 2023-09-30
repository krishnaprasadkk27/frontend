import { NgClass, NgFor } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import {HttpClientModule,HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-intake',
  templateUrl: './intake.component.html',
  styleUrls: ['./intake.component.css']
})
export class IntakeComponent implements OnInit{

ngOnInit(): void {

}
constructor(private http: HttpClient){

}
  @ViewChild('intake') intakeForm:NgForm;

  intakeSubmit(){
      this.sanctionedApprovedIntake.ug_4_years=this.intakeForm.value.ug4years;
      console.log(this.sanctionedApprovedIntake.ug_4_years);
    console.log(this.intakeForm.value.ug4years);
  console.log(this.intakeForm.value);
  const intakeData=this.intakeForm.value;
this.http.post('https://nirf-frontend-default-rtdb.asia-southeast1.firebasedatabase.app/intake_data.json',intakeData).subscribe(Response =>{
  console.log(Response);
});



    }


    public sanctionedApprovedIntake:any={
    ug_4_years:0,
    ug_5_years: 0,
    pg_2_years: 0,
    pg_3_years:0
    }



  public totalStudentInput_UG4: any = {

    noOfMaleStudents: "",
    noOfFemaleStudents: "",
    withinState: "",
    outsideState: "",
    outsideCountry: "",
    economicallyBackward: "",
    sociallyChallenged: "",
    recievedFeeStateAndCentralGovernment: "",
    recievedFeeFromInstitutionalFunds: "",
    recievedFeeFromPrivateBodies: "",
    notRecievedFeeReimbursement: ""
  };

  public totalStudentInput_PG2: any = {

    noOfMaleStudents: "",
    noOfFemaleStudents: "",
    withinState: "",
    outsideState: "",
    outsideCountry: "",
    economicallyBackward: "",
    sociallyChallenged: "",
    recievedFeeStateAndCentralGovernment: "",
    recievedFeeFromInstitutionalFunds: "",
    recievedFeeFromPrivateBodies: "",
    notRecievedFeeReimbursement: ""
  };

  public totalStudentInput_UG5: any = {

    noOfMaleStudents: "",
    noOfFemaleStudents: "",
    withinState: "",
    outsideState: "",
    outsideCountry: "",
    economicallyBackward: "",
    sociallyChallenged: "",
    recievedFeeStateAndCentralGovernment: "",
    recievedFeeFromInstitutionalFunds: "",
    recievedFeeFromPrivateBodies: "",
    notRecievedFeeReimbursement: ""
  };


public Faculty:any={
  totalFaculty: "",
  partTimeFaculty: ""
};


  public totalStudentInput_PG3: any = {

    noOfMaleStudents: "",
    noOfFemaleStudents: "",
    withinState: "",
    outsideState: "",
    outsideCountry: "",
    economicallyBackward: "",
    sociallyChallenged: "",
    recievedFeeStateAndCentralGovernment: "",
    recievedFeeFromInstitutionalFunds: "",
    recievedFeeFromPrivateBodies: "",
    notRecievedFeeReimbursement: ""
  };

    ug4_totalStudentInputForm_noOfMaleStudents =new FormControl("", [Validators.required])
    ug4_totalStudentInputForm_noOfFemaleStudents =new FormControl("", [Validators.required])
    ug4_totalStudentInputForm_withinState =new FormControl("", [Validators.required])
    ug4_totalStudentInputForm_outsideState =new FormControl("", [Validators.required])
    ug4_totalStudentInputForm_outsideCountry =new FormControl("", [Validators.required])
    ug4_totalStudentInputForm_economicallyBackward =new FormControl("", [Validators.required])
    ug4_totalStudentInputForm_sociallyChallenged =new FormControl("", [Validators.required])
    ug4_totalStudentInputForm_recievedFeeStateAndCentralGovernment =new FormControl("", [Validators.required])
    ug4_totalStudentInputForm_recievedFeeFromInstitutionalFunds =new FormControl("", [Validators.required])
    ug4_totalStudentInputForm_recievedFeeFromPrivateBodies = new FormControl("", [Validators.required])
    ug4_totalStudentInputForm_notRecievedFeeReimbursement = new FormControl("", [Validators.required])



    ug5_totalStudentInputForm_noOfMaleStudents =new FormControl("", [Validators.required])
    ug5_totalStudentInputForm_noOfFemaleStudents =new FormControl("", [Validators.required])
    ug5_totalStudentInputForm_withinState =new FormControl("", [Validators.required])
    ug5_totalStudentInputForm_outsideState =new FormControl("", [Validators.required])
    ug5_totalStudentInputForm_outsideCountry =new FormControl("", [Validators.required])
    ug5_totalStudentInputForm_economicallyBackward =new FormControl("", [Validators.required])
    ug5_totalStudentInputForm_sociallyChallenged =new FormControl("", [Validators.required])
    ug5_totalStudentInputForm_recievedFeeStateAndCentralGovernment =new FormControl("", [Validators.required])
    ug5_totalStudentInputForm_recievedFeeFromInstitutionalFunds =new FormControl("", [Validators.required])
    ug5_totalStudentInputForm_recievedFeeFromPrivateBodies = new FormControl("", [Validators.required])
    ug5_totalStudentInputForm_notRecievedFeeReimbursement = new FormControl("", [Validators.required])


    pg3_totalStudentInputForm_noOfMaleStudents =new FormControl("", [Validators.required])
    pg3_totalStudentInputForm_noOfFemaleStudents =new FormControl("", [Validators.required])
    pg3_totalStudentInputForm_withinState =new FormControl("", [Validators.required])
    pg3_totalStudentInputForm_outsideState =new FormControl("", [Validators.required])
    pg3_totalStudentInputForm_outsideCountry =new FormControl("", [Validators.required])
    pg3_totalStudentInputForm_economicallyBackward =new FormControl("", [Validators.required])
    pg3_totalStudentInputForm_sociallyChallenged =new FormControl("", [Validators.required])
    pg3_totalStudentInputForm_recievedFeeStateAndCentralGovernment =new FormControl("", [Validators.required])
    pg3_totalStudentInputForm_recievedFeeFromInstitutionalFunds =new FormControl("", [Validators.required])
    pg3_totalStudentInputForm_recievedFeeFromPrivateBodies = new FormControl("", [Validators.required])
    pg3_totalStudentInputForm_notRecievedFeeReimbursement = new FormControl("", [Validators.required])

    pg2_totalStudentInputForm_noOfFemaleStudents =new FormControl("", [Validators.required])
    pg2_totalStudentInputForm_withinState =new FormControl("", [Validators.required])
    pg2_totalStudentInputForm_noOfMaleStudents =new FormControl("", [Validators.required])
    pg2_totalStudentInputForm_outsideState =new FormControl("", [Validators.required])
    pg2_totalStudentInputForm_outsideCountry =new FormControl("", [Validators.required])
    pg2_totalStudentInputForm_economicallyBackward =new FormControl("", [Validators.required])
    pg2_totalStudentInputForm_sociallyChallenged =new FormControl("", [Validators.required])
    pg2_totalStudentInputForm_recievedFeeStateAndCentralGovernment =new FormControl("", [Validators.required])
    pg2_totalStudentInputForm_recievedFeeFromInstitutionalFunds =new FormControl("", [Validators.required])
    pg2_totalStudentInputForm_recievedFeeFromPrivateBodies = new FormControl("", [Validators.required])
    pg2_totalStudentInputForm_notRecievedFeeReimbursement = new FormControl("", [Validators.required])




    @ViewChild('actual') actualInputvalue:NgForm;
actualInput(){
console.log(this.actualInputvalue.value);
const actual_data=this.actualInputvalue.value;
return this.http.post('https://nirf-frontend-default-rtdb.asia-southeast1.firebasedatabase.app/actual_data.json',actual_data).subscribe(Response =>{
  console.log(Response);
});
}
@ViewChild('excel') excel:NgForm;

submitExcel(){
console.log(this.excel);
}


@ViewChild('totalFaculty') totalFacultyNumber:NgForm;
facultySubmit(){
const totalFacultyVal=this.totalFacultyNumber.value;

return this.http.post('https://nirf-frontend-default-rtdb.asia-southeast1.firebasedatabase.app/Faculty_data.json',totalFacultyVal).subscribe(Response =>{
  console.log(Response);
});


}

}
