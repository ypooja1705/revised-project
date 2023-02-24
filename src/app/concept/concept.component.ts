import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { serviceservice } from '../services.service';

@Component({
  selector: 'app-concept',
  templateUrl: './concept.component.html',
  styleUrls: ['./concept.component.scss']
})
export class ConceptComponent implements OnInit {

  constructor(private api:serviceservice,private http:HttpClient){

  }
  concepts: any={
    "name": "", "class": "", "section": ""
  };
  conceptsForm = {
    "name": "", "class": "", "section": ""
  }
  ngOnInit():void {
    debugger;  
    this.api.getConcepts().subscribe(data => {
      this.concepts = data;
      console.log(data);
    });
  }
  update() {
    debugger;
        let isconfirmed = confirm("are you sure to insert record");
        if (isconfirmed)
        {
          this.api.postconceptsForm(this.conceptsForm).subscribe(data=>{
            debugger;
            this.concepts.push(data);
            console.log("post response", data);
          });
        }
        else {
          alert("no record inserted");
        }
  }
}
