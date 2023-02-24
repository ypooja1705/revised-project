import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Comp1Component } from '../comp1/comp1.component';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit, AfterViewInit {
  // @ViewChild('p1') comp1component!:Comp1Component;
  @ViewChild(Comp1Component) counter!: Comp1Component;
  
  
  
constructor(){
  // this.comp1component= new Comp1Component();
}
  ngAfterViewInit(): void {
  }
  ngOnInit() {
    
  }
  increase(){
    this.counter.increasebyone();
  }
  decrease(){
    this.counter.decreasebyone();
  }

  

}
