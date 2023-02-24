import { Component } from '@angular/core';

@Component({
  selector: 'app-concept-two',
  templateUrl: './concept-two.component.html',

  styleUrls: ['./concept-two.component.scss']
})
export class ConceptTwoComponent {
  color = '';

  menuSource:any;
  constructor(){
    debugger;
    this.menuSource= [{
      
      route:"/application",
      displayName:"Application",
      cssClass:"btn btn-primary"
    },
    {
      route:"/application-two/:id",
      displayName:"Application-two",
      cssClass:"btn btn-secondary" 
    },
  {
    route:"/concept",
      displayName:"Concept",
      cssClass:"btn btn-dark" 
  },
  {
    route:"concept_two",
      displayName:"Concept_two",
      cssClass:"btn btn-info" 
  },
  {
    route:"/customer",
      displayName:"Customer",
      cssClass:"btn btn-danger" 
  }
  ]
}
}
