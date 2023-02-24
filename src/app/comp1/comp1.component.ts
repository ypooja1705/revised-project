import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { serviceservice } from '../services.service';
@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {
  message:string="1";
count:number=0;
constructor(private api:serviceservice,){}

increasebyone(){
  debugger;
this.count=this.count+1;
this.message="counter:"+this.count;}

decreasebyone(){
this.count=this.count-1;
this.message="counter:"+this.count
}
  
  ngOnInit(){
    
  }
  calculateSqure(num: number) {
    return this.api.getSquare(num);

}
calculateCube(num:number){
  return this.api.getCube(num);
  
}
}
