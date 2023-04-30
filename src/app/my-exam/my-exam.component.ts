import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,  Validators } from '@angular/forms';

@Component({
  selector: 'app-my-exam',
  templateUrl: './my-exam.component.html',
  styleUrls: ['./my-exam.component.css']
})
export class MyExamComponent implements OnInit {
  personArray = [
    {username:'mike',usercity:'15'},
    {username:'wang',usercity:'15'},
    {username:'dong',usercity:'15'},
  ];
  userform = new FormGroup({
    username :  new FormControl('',[Validators.required]),
    usercity: new FormControl('',[Validators.required])
  })

  constructor() { }

  ngOnInit(): void {
  }
  onsubmit(){
    console.log(this.userform['value']);
    this.personArray.push(this.userform['value']);
  }
}
