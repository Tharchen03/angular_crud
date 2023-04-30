import { outputAst } from '@angular/compiler';
import { Component, DebugEventListener, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemsService } from '../items.service';
@Component({
  selector: 'person-input',
  templateUrl: './persons-input.component.html',
  styleUrls: ['./persons-input.component.css']
})
export class PersonsInputComponent implements OnInit {

  constructor(private itemservice:ItemsService) { }
@Input()  personname:string='';
@Input()  isEdit:boolean=false;
@Output() getEnteredValue = new EventEmitter <string>()
@Output() getEditValue = new EventEmitter <string>()

  ngOnInit(): void {
    this.itemservice.emitindex.subscribe(indectoedit=>{
      this.personname = this.itemservice.personArray[indectoedit];
      this.isEdit = true;
    })
    
  }
  getPersonName(){
    this.itemservice.getnewperson(this.personname);
        // for the name to add in array through push array
    // this.getEnteredValue.emit(this.personname);
    this.personname ='';

  }


  editName(){
    this.getEditValue.emit(this.personname);

    // update from service file
    this.itemservice.updateEditedperson(this.personname);
    this.personname ='';
    this.isEdit = false;
  }

  
}
