import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntakeComponent } from './components/intake/intake.component';
import { FinanceComponent } from './components/finance/finance.component';
import { PhdComponent } from './components/phd/phd.component';
import { UgPgComponent } from './components/ug-pg/ug-pg.component';
import { ResearchComponent } from './components/research/research.component';
import { PcsComponent } from './components/pcs/pcs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from  '@angular/material/button' ;
import { MatTabsModule } from '@angular/material/tabs';
import {MatFormField} from '@angular/material/form-field';
import {FormsModule,ReactiveFormsModule,FormBuilder, FormGroup, Validators} from '@angular/forms';


import {MatFormFieldModule} from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { ExcelComponent } from './components/excel/excel.component';

@NgModule({
  declarations: [
    AppComponent,
    IntakeComponent,
    FinanceComponent,
    PhdComponent,
    UgPgComponent,
    ResearchComponent,
    PcsComponent,
    ExcelComponent
  ],
  imports: [
    HttpClientModule,
    MatRadioModule ,
    MatFormFieldModule,
FormsModule,
ReactiveFormsModule,

    MatButtonModule,
    MatTabsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
