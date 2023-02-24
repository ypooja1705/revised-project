import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-producer',
  templateUrl: './producer.component.html',
  styleUrls: ['./producer.component.scss']
})
export default class ProducerComponent implements OnChanges,OnInit ,DoCheck,AfterContentInit,
AfterContentChecked,AfterViewInit,AfterViewChecked {
   title="producer";
   name="square";
  constructor(){ 
  }

  ngOnChanges() {
    alert('Method ngOnChanges.');
  
}
ngOnInit(): void {
  alert('ngOnInit');
}
ngDoCheck(): void {
  alert('method ngdocheck.')  
}
ngAfterContentInit(): void {
   alert('method ngaftercontentinit') 
}
ngAfterContentChecked(): void {
    alert('methodngAfterContentChecked ')
}
ngAfterViewInit(): void {
    alert('ngAfterViewInit')
}
ngAfterViewChecked(): void {
  alert('ngAfterViewChecked')  
}

}
