import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService{
	private _url:string="apidata/employeedata.json";
	constructor(private _http: Http){}
	getEmployeeInfo(){
		return this._http.get(this._url)
			.map((response: Response)=> response.json());
	}
	getEmployee(){
		return [
 		{"id":1,"name":"andrew","gender":"Male"},
 		{"id":2,"name":"Bradon","gender":"Male"},
 		{"id":3,"name":"Christina","gender":"Female"},
 		{"id":4,"name":"Elena","gender":"Female"},
 		{"id":5, "name":"priyanka","gender":"Female"}
 	]

	}
}