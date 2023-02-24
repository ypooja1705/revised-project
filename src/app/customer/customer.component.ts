import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { serviceservice } from '../services.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit{
  constructor(private api:serviceservice,private http:HttpClient){
debugger;
  } 
  customers: any={
    "name": "", "class": "", "section": ""
  };
customersForm = {
    "name": "", "class": "", "section": ""
  }
  status:string='offline';
  
  ngOnInit():void {
    debugger;  
    this.api.getCustomers().subscribe(data => {
      this.customers = data;
      console.log(data);
    });
  }
about='data binding defines how view and components communicate with each other';
 types='four types-String interplolation,Property,Event,Two way';
 
 isUnchanged = true;
 onPress() {
  alert('button is clicked');
  console.log("clicked");}
  
  onSave() {
debugger;
    let isconfirmed = confirm("are you sure to insert record");
    if (isconfirmed)
    {
      // this.http.post("http://localhost:3000/Student", this.studentsForm).subscribe(data => {
      //  this.students.push(data);
      //    console.log("post response", data);
      //  })
      this.api.postcustomersForm(this.customersForm).subscribe(data=>{
        debugger;
        this.customers.push(data);
        console.log("post response", data);
      });
    }
    else {
      alert("no record inserted");
    }


  } 

}
