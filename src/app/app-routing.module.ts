import { NgModule } from '@angular/core';
import { RouterModule, Routes, RoutesRecognized } from '@angular/router';
import { IntakeComponent } from './components/intake/intake.component';
import { FinanceComponent } from './components/finance/finance.component';
import { PhdComponent } from './components/phd/phd.component';
import { PcsComponent } from './components/pcs/pcs.component';
import { ResearchComponent } from './components/research/research.component';
import { UgPgComponent } from './components/ug-pg/ug-pg.component';
import { ExcelComponent } from './components/excel/excel.component';


const routes: Routes = [];


const appRoute:Routes=[
{path:"intake",component:IntakeComponent},
{path:"finance",component:FinanceComponent},
{path:"phd",component:PhdComponent},
{path:"pcs",component:PcsComponent},
{path:"research",component:ResearchComponent},
{path:"phd",component:PhdComponent},
{path:"ug-pg", component:UgPgComponent},
{path:"excel", component:ExcelComponent}

];




@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
