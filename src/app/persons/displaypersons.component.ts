import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-displaypersons',
  templateUrl: './displaypersons.component.html',
  styleUrls: ['./displaypersons.component.css']
})
export class DisplaypersonsComponent implements OnInit {
personArray:string[] = [];
editperson:string='';
isEdit:boolean=false;
index:number=0;
  constructor(private itemservice:ItemsService) { }

  ngOnInit(): void { 
    // this.personArray is from this file array = being equied with services file this.itemservice.personArray;  
    this.personArray = this.itemservice.personArray; 
    this.itemservice.updateArray.subscribe((personArrayFromServices)=>{
      this.personArray = personArrayFromServices;
    })
  }
 
  getPersonName(person:string){
    // console.log(person, 'person name for person input component');
    // for the name to add in array through push array
    //  this.personArray.push(person);
  }

  getclickedName(clickedperson:string){
    // for the array name to apper in console 
    // console.log(clickedperson);
    // this.personArray = this.personArray.filter(person=>{
    //   return person !== clickedperson
    // });
  }


  geteditindex(index:number){
    // console.log(index);
    // console.log(this.personArray[index]);
    this.index =index;
    this.editperson =this.personArray[index];
    this.isEdit = true;
  }


  getEditValue(edit:string){
    this.personArray[this.index]=edit;
    this.isEdit = false;
  }


}
