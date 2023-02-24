import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { CustomerComponent } from '../customer/customer.component';
const routes: Routes = [
  
  {
    path:"", component:CustomerComponent
  },

{
  path:"customer", component:CustomerComponent
}]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class CustomerRoutingModule { }
