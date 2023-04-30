import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from './app.component';
import { ThcomponentComponent } from './thcomponent/thcomponent.component';
import { secondcomponentComponent } from './secondcomponent/secondcomponent.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component'

// import for two way property binding
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactivefornsComponent } from './reactiveforns/reactiveforns.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { SelecteditemComponent } from './selecteditem/selecteditem.component';
import { ChildRoutingComponent } from './child-routing/child-routing.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { FotterComponent } from './fotter/fotter.component';
import { PersonsComponent } from './persons/persons.component';
import { PersonsInputComponent } from './persons/persons-input.component';
import { DisplaypersonsComponent } from './persons/displaypersons.component';
import { CrudOperationComponent } from './crud-operation/crud-operation.component';
import { MyExamComponent } from './my-exam/my-exam.component';




// import declaration provided
@NgModule({
  declarations: [
    AppComponent,
    ThcomponentComponent,
    secondcomponentComponent,
    TemplateDrivenFormsComponent,
    ReactivefornsComponent,
    PagenotfoundComponent,
    HomepageComponent,
    ItemlistComponent,
    SelecteditemComponent,
    ChildRoutingComponent,
    ChildAComponent,
    ChildBComponent,
    FotterComponent,
    PersonsComponent,
    PersonsInputComponent,
    DisplaypersonsComponent,
    CrudOperationComponent,
    MyExamComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    // for two way property binding
    CommonModule,
    FormsModule,
    
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
