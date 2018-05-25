import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class EmployeeService{
	private _url:string="apidata/employeedata.json";
	constructor(private _http: Http){}
	getEmployeeInfo(){
		return this._http.get(this._url)
			.map((response: Response)=> response.json())
			.catch(this._errorHandler);
	}

	_errorHandler(error:Response){
		console.error(error);
		return Observable.throw(error || "server error") ;		
	}

	getEmployee(){
		return [
 		{"id":1,"name":"andrew","gender":"Male"},
 		{"id":2,"name":"Bradon","gender":"Male"},
 	]

	}

	getDepartmentInfo(){
		return[
		{"id":1,"name":"devlopment"},
		{"id":2,"name":"testing"},
		{"id":3,"name":"HR"}
		]
	}
}