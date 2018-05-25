import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
	selector: 'department-list',
	template: `<h2>Department-List</h2>
			  <ul *ngFor= "let department of dept" >
				<li> {{department.name}} </li>
			  </ul> `
})
 export class DepartmentListComponent implements OnInit {
 	dept =[];

 	constructor(private _employeeService:EmployeeService ){}

 	ngOnInit(){
 		this.dept = this._employeeService.getDepartmentInfo();
 	}
 }