import { Component ,OnInit} from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.scss']
})
export class ApplicationComponent implements OnInit{
  constructor(private route:Router){

  }
  abc:any;
  
  ngOnInit(): void {
    alert('ngOnInit'); 
  }
  navigateToOrderDetails(id:number){
    this.route.navigate(['application-two',id]);

      }
      
  
    }