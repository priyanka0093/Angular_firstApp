import { Component } from '@angular/core';

@Component({
	selector: 'employee-list',
	template: `<h2>EmployeeList</h2>
			  <ul *ngFor= "let employee of employees" >
				<li> {{employee.name}} </li>
			  </ul> `
})
 export class EmployeeListComponent {
 	employees =[
 		{"id":1,"name":"andrew","gender":"Male"},
 		{"id":2,"name":"Bradon","gender":"Male"},
 		{"id":3,"name":"Christina","gender":"Female"},
 		{"id":4,"name":"Elena","gender":"Female"}
 	]
 }