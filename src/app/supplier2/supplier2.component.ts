import { Component } from '@angular/core';

@Component({
  selector: 'app-supplier2',
  templateUrl: './supplier2.component.html',
  styleUrls: ['./supplier2.component.scss']
})
export class Supplier2Component {

  arrayset:any=[];
  updateTable(event:any){
    this.arrayset.push(event);
  }
  
  
}
