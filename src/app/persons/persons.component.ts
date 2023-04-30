import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'person-list',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
@Input() personslist :string[]=[];
@Output() getclickedevent = new EventEmitter <string>()
@Output() getclickededitindex = new EventEmitter<number>()

  constructor(private itemservice:ItemsService ) { }

  ngOnInit(): void {
    console.log(this.personslist);   
  }

  
  getclickedperson(person:string){
   //this.getclickedevent.emit(person);
   this.itemservice.deleteperson(person);
  }


  clickedindex(i:number){
    // console.log(i);
   // this.getclickededitindex.emit(i);
   this.itemservice.Editperson(i);
  }
}
