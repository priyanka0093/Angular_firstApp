import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { FormGroup, FormControl} from '@angular/forms'

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

  constructor() { }

  ngOnInit() {
  }

  userForm2 =  new FormGroup({
    name: new FormControl('Priyanka'),
    email: new FormControl(),
    address:new FormGroup({
      street: new FormControl(),
      city: new FormControl(),
      postalcode: new FormControl(),
    })
  });

  OnSubmitForm(){
    console.log(this.userForm2.value);
  }
}
