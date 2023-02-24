import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projectdemo';
  about ='this is a angular revision project';

  menuSource:any;
  constructor(){
    debugger;
    this.menuSource= [{

      route:"application",
      displayName:"Application",
      cssClass:"btn btn-primary"
    },
    {
      route:"application-two/:id",
      displayName:"Application-two",
      cssClass:"btn btn-secondary" 
    },
  {
    route:"concept",
      displayName:"Concept",
      cssClass:"btn btn-dark" 
  },
  {
    route:"concept_two",
      displayName:"Concept_two",
      cssClass:"btn btn-info" 
  },
  {
    route:"customer",
      displayName:"Customer",
      cssClass:"btn btn-light" 
  },
  {
    route:"supplier",
      displayName:"Supplier",
      cssClass:"btn btn-dark" 
  },
  {
    route:"supplier2",
      displayName:"Supplier2",
      cssClass:"btn btn-danger"
  },
  {
    route:"producer/producer",
      displayName:"producer",
      cssClass:"btn btn-primary"
  },
  {
    route:"comp1",
      displayName:"Comp1",
      cssClass:"btn btn-success"
  },
  {
    route:"comp2",
      displayName:"Comp2",
      cssClass:"btn btn-warning"
  },

{route:"comp3",
displayName:"Comp3",
cssClass:"btn btn-info" 
},
    ]}
  }
 

  


