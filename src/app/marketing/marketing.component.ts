import { Component } from '@angular/core';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.scss']
})
export class MarketingComponent {

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
    }
  ]
}
}
