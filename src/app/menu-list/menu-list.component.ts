import { Component ,Input, OnInit,} from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.scss']
})
export class MenuListComponent implements OnInit {

  constructor(){
  }

  @Input() menulist:any;


 ngOnInit() {
  }


}

  