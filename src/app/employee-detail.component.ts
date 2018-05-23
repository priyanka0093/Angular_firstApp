import { Component } from '@angular/core';

@Component({
	selector: 'employee-detail',
	template: `<h2>EmployeeList</h2>
			  <ul *ngFor= "let employee of employees" >
				<li>{{employee.id}} {{employee.name | uppercase}}  {{employee.gender}} </li>
			  </ul> `
})
 export class EmployeeDetailComponent {
 	employees =[
 		{"id":1,"name":"andrew","gender":"Male"},
 		{"id":2,"name":"Bradon","gender":"Male"},
 		{"id":3,"name":"Christina","gender":"Female"},
 		{"id":4,"name":"Elena","gender":"Female"}
 	]
 }