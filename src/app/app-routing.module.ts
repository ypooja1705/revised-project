import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationTwoComponent } from './application-two/application-two.component';
import { ApplicationComponent } from './application/application.component';

import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import Comp3Component from './comp3/comp3.component';
import { ConceptTwoComponent } from './concept-two/concept-two.component';
import { ConceptComponent } from './concept/concept.component';
import { CustomerComponent } from './customer/customer.component';
import { MarketingComponent } from './marketing/marketing.component';
import { SupplierComponent } from './supplier/supplier.component';
import { Supplier2Component } from './supplier2/supplier2.component';

const routes: Routes = [
   {path:"application" ,component:ApplicationComponent},
   {path:"application-two/:id",component:ApplicationTwoComponent},
   {path:"concept",component:ConceptComponent},
   {path:"concept_two",component:ConceptTwoComponent},
  //  {path:"customer",component:CustomerComponent},
   {path:"supplier",component:SupplierComponent},
   {path:"supplier2",component:Supplier2Component},
   {path: 'producer', loadChildren: () => import('./producer/producer.module').then(m => m.ProducerModule) },
   {path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },
   {path:"comp1",component:Comp1Component},
   {path:"comp2",component:Comp2Component},
   {path:"comp3",component:Comp3Component},
   {path:"marketing",component:MarketingComponent}
   
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
