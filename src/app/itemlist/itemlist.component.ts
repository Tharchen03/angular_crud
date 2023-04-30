import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

import { ItemsService } from '../items.service';


@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent implements OnInit {
items:any;

  constructor(public route:Router,public itemsServices:ItemsService) { }

  ngOnInit(): void {
    this.itemsServices.getitem().subscribe({
      next:itemsFromService=>{
        this.items = itemsFromService
      },
      error:error=>{
        alert(error)
      },
      complete:()=>{
        setTimeout(() => {
          alert('data loaded successfully')
        }, 500);
     
      },
    })


    // this.itemsServices.getitem().subscribe({
    //   next:(itemsFromServices)=>{
    //     this.items = itemsFromServices
    //   },
    //   error:(error=>{
    //     alert(error);
    //   },() =>{
    //     setTimeout(()=>{
    //       alert('data loaded sucessfully')
    //     })
    //   })

    // })

    // ()=>{
    //   setTimeout(() => {
    //     alert('data loaded sucessfully')
    //   }, 500);

    // })


    // this.items = this.itemsServices.getitem();
    // console.log(this.items);

    // console.log('first line');
    // setTimeout(() => {
    //   console.log('second line');  
    // }, 1000);

    // console.log('third line');
    // this.items = this.itemsServices.getitem();
    // this.voidFunction();
    // this.returnfunction();
    // var returnString = this.voidFunction();
    // console.log(returnString);

  }

  clickeditem(id:any){
    this.route.navigate(['/selecteditem',id]);

  }
  // voidFunction(){
  //   // console.log('this is void function ');
  //   let voidString = 'this is void function ';
  // }
  // returnfunction(){
  //   // return 'this is return function'
  //   let returnString = 'this is return function';
  //    return returnString;
  // }
  
}
