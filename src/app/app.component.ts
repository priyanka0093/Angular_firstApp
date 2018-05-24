import { Component, OnInit } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';
import { EmployeeService } from './employee.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EmployeeService]
})
export class AppComponent {
	myName= "prachi";

	onSubmit(value:any){
		console.log(value);
	}
  title: string = 'Does That Really Work?';

}
