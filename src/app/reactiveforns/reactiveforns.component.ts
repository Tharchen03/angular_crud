import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveforns',
  templateUrl: './reactiveforns.component.html',
  styleUrls: ['./reactiveforns.component.css']
})
export class ReactivefornsComponent implements OnInit {

  constructor() { }

  countries =["","india","japan","bhutan","china"]
  ngOnInit(): void {
  } 


  // FormGroup containing input element
  myform = new FormGroup({
    username : new FormControl('',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]),
    password : new FormControl('',[Validators.required,Validators.minLength(5)]),
    country : new FormControl('',Validators.required),
    gender : new FormControl(''),
    Rember_me :  new FormControl(false)
  });



  onSubmit(){
    console.log(this.myform.value,this.myform.invalid);
  }  
  
}
