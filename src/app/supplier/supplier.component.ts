import { Component ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent {

  @Output() onupdate= new EventEmitter();//it will work as custom event ,iss property ka data agge push krne ya emit krne kae kaam ayega
  record:any;//here in this property data will store and send to parent
  constructor(){
    this.record={
      name:"",
      class:"",
      
    }
  }
  onSave(){
    this.onupdate.emit(this.record);
  } 
}
