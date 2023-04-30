import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {

  enteredvalue:string= "some name is needed man";

  // for the input:type option in form
  countries =["bhutan","india","japan","us","china"]

  // data group from form
  userData ={
    username:"",
    email:"",
    password:"",
    country:"",
    gender:"",
    Rember_me:false,

  }


  constructor() { }

  ngOnInit(): void {
  }

  
  submitForm(Form:any){
    console.log(Form);
  
  }


// keyPressEvent
// keyPressEvent(Input:any){
//   console.log(Input,'user entered value');

//   // showing entered value
//   this.enteredvalue=Input;
// }

}
