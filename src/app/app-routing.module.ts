import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { ChildRoutingComponent } from './child-routing/child-routing.component';
import { CrudOperationComponent } from './crud-operation/crud-operation.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { MyExamComponent } from './my-exam/my-exam.component';
import { NoAccessGuard } from './no-access.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DisplaypersonsComponent } from './persons/displaypersons.component';
import { ReactivefornsComponent } from './reactiveforns/reactiveforns.component';
import { SelecteditemComponent } from './selecteditem/selecteditem.component';

// import for the path:templateDrivenForm
import {TemplateDrivenFormsComponent} from './template-driven-forms/template-driven-forms.component'

const routes: Routes = [

// this redirectTo the homepage directly while http://localhost:4200/ ** 
//prefix to match previous path or if no link exits than it redirect to default home
  {path:'',redirectTo:'/homepage',pathMatch:'full'},

    // for the path:SelecteditemComponent
  {path:'selecteditem/:id', component:SelecteditemComponent},

  //route grant assess NoAccessGuard
  {path:'itemlist', component:ItemlistComponent,
  canActivate:[NoAccessGuard]},

    // for the path:HomepageComponent
  {path:'homepage', component:HomepageComponent},

    // for the path:templateDrivenForm
  {path:'templateDrivenForm', component:TemplateDrivenFormsComponent},

      // for the path:DisplaypersonsComponent
  {path:'displayperson', component:DisplaypersonsComponent},

      // for the path:CrudOperationComponent
  {path:'crudOperation', component:CrudOperationComponent},

      // for the path:ReactivefornsComponent
  {path:'reactiveforms',component:ReactivefornsComponent},
  
// three child routing children:[]
  {path:'childrouting' ,component:ChildRoutingComponent,
children:[
  {path:'childA', component:ChildAComponent},
  {path:'childB', component:ChildBComponent},

]},
{path:'MyExam', component:MyExamComponent},

  // page not found 404
  {path:'**', component:PagenotfoundComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
