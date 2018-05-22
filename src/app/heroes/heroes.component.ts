import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
// import { FormGroup, FormControl, Validators} from '@angular/forms' /*Module Driven Form*/
import { FormGroup, FormBuilder, Validators} from '@angular/forms'  /*Module Driven Form* With Form Builder */

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

	hero: Hero={
		id: 1,
		name: 'windstrome'
	};
/*Module Driven Form* With Form Builder */
  userForm2:FormGroup;
  constructor(private _formBuilder:FormBuilder) { }

  ngOnInit() {
    this.userForm2= this._formBuilder.group({
      name:['Prachi', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      email: [],
      address: this._formBuilder.group({
        street:[],
        city:[],
        postalcode:[null,[Validators.pattern('^[1-9][0-9]{4}$')]]
      })
    })
  }

  

// Module Driven Form
  // userForm2 =  new FormGroup({
  //   name: new FormControl('Priyanka', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
  //   email: new FormControl(),
  //   address:new FormGroup({
  //     street: new FormControl(),
  //     city: new FormControl(),
  //     postalcode: new FormControl(null, Validators.pattern('^[1-9][0-9]{4}$')),
  //   })
  // });

  onSubmitForm(){
    console.log(this.userForm2.value);
  }
}
