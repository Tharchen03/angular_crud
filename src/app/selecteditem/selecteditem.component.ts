import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../items.service';


@Component({
  selector: 'app-selecteditem',
  templateUrl: './selecteditem.component.html',
  styleUrls: ['./selecteditem.component.css']
})
export class SelecteditemComponent implements OnInit {
 id:any;
 items:any;
 itemname:string = "";
 itemprice:number= 0;
 isavaliable:string = "";

constructor(public activateRoute:ActivatedRoute,public Itemservices:ItemsService){}


  ngOnInit(): void {
    this.items = this.Itemservices.getitem();
    this.id = this.activateRoute.snapshot.paramMap.get('id');

    //to get accurate id
    this.id = this.id-1;

    console.log(this.id);
    this.getEachEntry();   
  }


  getEachEntry(){
    this.itemname = this.items[this.id].name;
    this.itemprice = this.items[this.id].price;
    this.isavaliable = this.items[this.id].avaliable == true?'yes':'no';
  }

}
