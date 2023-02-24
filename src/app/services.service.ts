import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class serviceservice {
  constructor(private http:HttpClient) { 
  }
  getCustomers(){
    return this.http.get("http://localhost:3000/Customer");
   }
   postcustomersForm(data:any){
    debugger;
     return this.http.post("http://localhost:3000/Customer",data);
    }
    getConcepts(){
      return this.http.get("http://localhost:3000/Concept");
    }
    postconceptsForm(data:any){
      debugger;
      return this.http.post("http://localhost:3000/Concept",data);
    }
    getSquare(a:number){
      return a*a;
}
getCube(a:number){
  return a*a*a;
}
}
