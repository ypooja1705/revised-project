import { Component,OnInit } from '@angular/core';
import {ActivatedRoute,ParamMap} from '@angular/router';
@Component({
  selector: 'app-application-two',
  templateUrl: './application-two.component.html',
  styleUrls: ['./application-two.component.scss']
})
export class ApplicationTwoComponent implements OnInit {
  
  data:any;
orderId:any
  constructor(private activeRoute:ActivatedRoute){
    
     this.data=localStorage.getItem("functionName");
    localStorage.removeItem("functionName");
    alert(this.data + "application-two component");
  }


  ngOnInit(): void {
   this.activeRoute.paramMap.subscribe((params: ParamMap) => {

      this.orderId = params.get('id');
    });
    
    alert(this.orderId);
  }
  
  
}
