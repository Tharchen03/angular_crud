import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsSkipTestsService {
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



  constructor() { }
  getItems(){
    return this.items;
  }
}
