import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ApplicationComponent } from './application/application.component';
import { ApplicationTwoComponent } from './application-two/application-two.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { FormsModule } from '@angular/forms';
import { ConceptComponent } from './concept/concept.component';
import { HighlightDirective } from './highlight.directive';
import { ConceptTwoComponent } from './concept-two/concept-two.component';
import { CustomerComponent } from './customer/customer.component';
import { serviceservice } from './services.service';
import ProducerComponent from './producer/producer.component';
import { SupplierComponent } from './supplier/supplier.component';
import { Supplier2Component } from './supplier2/supplier2.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import Comp3Component from './comp3/comp3.component';
import { MarketingComponent } from './marketing/marketing.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationComponent,
    ApplicationTwoComponent,
    ConceptComponent,
    HighlightDirective,
    ConceptTwoComponent,
    // CustomerComponent,
    MenuListComponent,
    SupplierComponent,
    Supplier2Component,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    MarketingComponent,
  
    
  ],
  imports: [
    BrowserModule,
  AppRoutingModule,
  HttpClientModule,
    FormsModule
  ],
  providers: [serviceservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
