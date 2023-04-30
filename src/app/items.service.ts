import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  personArray = ['mike','wang','dong'];

  items = [
    //string data type
    {id:1, name : 'bike', price: 100, avaliable:true},
    {id:2, name : 'tv', price: 200,avaliable:false},
    {id:3, name : 'Aldum', price: 20,avaliable:true},
    {id:4, name : 'book', price: 500,avaliable:false},
    {id:5, name : 'phone', price: 500,avaliable:false},
    {id:6, name : 'computer', price: 1000,avaliable:true},
    {id:7, name : 'key board', price: 25,avaliable:false},
  ];

  itemObservable:any;
  // for edit
  updateArray = new Subject<any[]>();
  emitindex = new Subject<number>();
  editPersonIndex: number=0;

  constructor() { }
  getitem(){
    let myitem = new Observable<any[]>(emititems =>{
      emititems.next([
        {id:1, name : 'bike', price: 100, avaliable:true},
        {id:2, name : 'tv', price: 200,avaliable:false}, 


      ]);
      setTimeout(() =>{
        emititems.next([
          {id:1, name : 'bike', price: 100, avaliable:true},
          {id:2, name : 'tv', price: 200,avaliable:false},
          {id:3, name : 'Aldum', price: 20,avaliable:true},
          {id:4, name : 'book', price: 500,avaliable:false},
          {id:5, name : 'phone', price: 500,avaliable:false},
        ]);
        // emititems.complete();

      },3000);
            // making error
            // setTimeout(() => {
            //   emititems.error('connection Disconnected');    
            // }, 3000);

      setTimeout(()=> {
        emititems.next(this.items);
        // emititems.complete();
      },7000);
            //   emititems.error('connection Disconnected');

    })
    // shows only two this datas
    // let myitem = [
    //   {id:1, name : 'bike', price: 100, avaliable:true},
    //   {id:2, name : 'tv', price: 200,avaliable:false}, 
    // ];

    // setTimeout(()=>{
    // // after this code all the datastring come back
    // myitem = this.items;
    // console.log(myitem);
    // },7000);

    // console.log(myitem);

    return myitem;
  }


  getnewperson(personame:string){
    // console of person input in service file
    console.log(personame);
    this.personArray.push(personame);
  
  }
  deleteperson(clickedperson:string){
    // for the array name to apper in console 
     // console.log(clickedperson);
     this.personArray = this.personArray.filter(person=>{
       return person !== clickedperson
     });
     this.updateArray.next(this.personArray);
    //  console.log(this.personArray);
     
 }
 Editperson(index:number){
//  console.log(index);
this.editPersonIndex = index;
this.emitindex.next(index);


 }
 updateEditedperson(updatedperson:string){
  this.personArray[this.editPersonIndex]=updatedperson;
  // console.log(this.personArray);
  

 }
}
