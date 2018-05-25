import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';


import { AppComponent } from './app.component' ;
import { HeroesComponent } from './heroes/heroes.component';
import { EmployeeListComponent } from './employee-list.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { DepartmentListComponent } from './department-list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'departments',component:DepartmentListComponent},
      {path:'employees',component:EmployeeListComponent},
      {path:'employeedetails',component:EmployeeDetailComponent},
      {path:'reactiveMDF',component:HeroesComponent}
      ])
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    DepartmentListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
