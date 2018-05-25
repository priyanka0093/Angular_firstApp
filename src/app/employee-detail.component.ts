import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
	selector: 'employee-detail',
	template: `<h2>EmployeeList</h2>
			   <h3>{{errorMsg}}</h3>	
			  <ul *ngFor= "let employee of employees" >
				<li>{{employee.id}} {{employee.name | uppercase}}  {{employee.gender}} </li>
			  </ul> `
})
 export class EmployeeDetailComponent  implements OnInit{
 	employees =[];
 	errorMsg:string;
    constructor(private _employeeService: EmployeeService){}

    ngOnInit(){
    	// this.employees= this._employeeService.getEmployeeInfo();
    	this._employeeService.getEmployeeInfo()
    	.subscribe(resEmployeeData => this.employees = resEmployeeData,
    			   resEmployeeError => this.errorMsg = resEmployeeError);
    }
 }