import { Component, OnInit } from '@angular/core';


// placed in declarations[] array of any module
@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.getEachEntry();
  } 

  // project title default
  title = 'my-tharchen';


  // input types
  name:string = "myname";
  type:string = "password";
  

  items = [
    //string data type
    { name : 'bike', price: 100, avaliable:true},
    { name : 'tv', price: 200,avaliable:false},
    { name : 'Aldum', price: 20,avaliable:true},
    { name : 'book', price: 500,avaliable:false},
    { name : 'phone', price: 500,avaliable:false},
    { name : 'computer', price: 1000,avaliable:true},
    { name : 'key board', price: 25,avaliable:false},
  ];


  // string data type
  itemname:string = "";
  itemprice:number= 0;
  isavaliable:string = "";
  itemindex:number= 0;
  // templetreference
  templetreference:string = "";
// ngif for true n false structrual directive
  showenteredvalue:boolean=false;
   

 
 
  // showing password in js
  showpassword(){
    if(this.type === "password"){
      this.type ="text"

    }else{
      this.type = "password"
    }
  }
  changeTitle(){
    if(this.title == "my-tharchen"){
      this.title="lang"
    }else{
    this.title ="my-tharchen"
  }

}

// getting entrys in html
getEachEntry(){
  this.itemname = this.items[0].name;
  this.itemprice = this.items[0].price;
  this.isavaliable = this.items[0].avaliable == true?'yes':'no';
}


// button js code for next ++ items
nextitem(){
  this.itemindex = this.itemindex+1;
  if(this.itemindex === this.items.length){
  this.itemindex =0;
  }
  this.itemname = this.items[this.itemindex].name;
  this.itemprice = this.items[this.itemindex].price;
  this.isavaliable = this.items[this.itemindex].avaliable == true?'yes':'no';
  console.log(this.itemindex)

  
  }


  // getting input text / templets references
//  getEnteredvalue(input:any){
//   alert(input);
//  }


// templets references
getEnteredvalue(input:any){
  this.templetreference = input;
  console.log(this.templetreference.length)
  if(this.templetreference.length >=10){
    this.showenteredvalue=true;
  }
}



 
  
}
