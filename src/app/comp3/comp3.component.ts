import { Component ,ViewChild,AfterViewInit,ElementRef} from '@angular/core';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export default class Comp3Component implements AfterViewInit {

  @ViewChild('someInput') someInput!: ElementRef;
  ngAfterViewInit() {
    this.someInput.nativeElement.value = 'Whale!';
  }
  // @ViewChild('nature') nature!:ElementRef;
  // constructor(){
  // this.nature.nativeElement.value ='mountains!';
  // }
}
