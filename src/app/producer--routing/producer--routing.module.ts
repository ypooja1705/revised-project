import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import ProducerComponent from '../producer/producer.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  
    {
      path:"", component:ProducerComponent
    },
  
  {
    path:"producer", component:ProducerComponent
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProducerRoutingModule { }
